import express from "express";
import next from "next";
import dotenv from "dotenv";
import geoip from "geoip-lite";

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 5000;

// List of valid ISO country codes and locales
const validCountryISOs = ["us", "ca", "gb", "fr", "de", "nl"];
const validLocales = ["en", "fr", "nl", "de", "es", "ta", "hi"];
const defaultLocale = "en";

// Middleware logic to handle geolocation and language-based redirection
function middleware(req, res, next) {
  const pathname = req.path;

  // Skip Next.js static files, image optimization, and favicon routes
  if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
    return next();
  }

  console.log("Current path:", pathname);

  const pathParts = pathname.split("/").filter(Boolean); // Get all parts of the path
  const userCountryISO = pathParts[0]?.toLowerCase(); // First part is country
  const userLanguage = pathParts[1]?.toLowerCase(); // Second part is language

  console.log("User country ISO from URL:", userCountryISO);
  console.log("User language from URL:", userLanguage);

  // Check if the country and language are valid
  const isCountryValid = validCountryISOs.includes(userCountryISO);
  const isLanguageValid = validLocales.includes(userLanguage);

  if (isCountryValid && isLanguageValid) {
    console.log("Valid country and language, proceeding...");
    return next(); // No redirection needed
  }

  // Fetch the user's actual location (country) based on IP
  const userLocation = fetchUserLocation(req);
  const { country: detectedCountry } = userLocation;

  // Get browser's preferred language from accept-language header
  const browserLanguage = getBrowserLanguage(req);

  console.log("Detected user country:", detectedCountry);
  console.log("Browser language:", browserLanguage);

  // If the user is already on the correct URL, don't redirect
  if (userCountryISO === detectedCountry && userLanguage === browserLanguage) {
    console.log("User is already on the correct URL, proceeding...");
    return next(); // No redirection needed
  }

  // Construct the new valid URL using detected country and browser language
  const newUrl = `/${detectedCountry}/${browserLanguage}${pathname.replace(
    `/${userCountryISO}/${userLanguage}/`,
    ""
  )}`;

  console.log("Redirecting to:", newUrl);
  return res.redirect(newUrl);
}

// Helper function to fetch user location using geoip-lite
function fetchUserLocation(req) {
  console.log("Fetching client IP address...");

  // Get the client's IP address from request headers or use the remote address
  const clientIP = req.headers["x-forwarded-for"]?.split(",")[0] || req.connection.remoteAddress;

  if (!clientIP) {
    console.error("Unable to detect client IP address.");
    return { country: "us", language: "en" };
  }

  console.log("Detected client IP address:", clientIP);

  // Fetch location data based on the detected client IP address using geoip-lite
  const geoData = geoip.lookup(clientIP);
  if (!geoData) {
    console.error("No geolocation data found for IP:", clientIP);
    return { country: "us", language: "en" };
  }

  console.log("GeoIP Lookup Details for IP:", clientIP);
  console.log("Country:", geoData.country);
  console.log("Region:", geoData.region);
  console.log("City:", geoData.city);

  return {
    country: geoData.country?.toLowerCase() || "us", // Default to 'us' if country code is unavailable
    language: "en", // Default to 'en' (geoip-lite doesn't provide language info)
  };
}

// Helper function to get the browser language from the 'accept-language' header
function getBrowserLanguage(req) {
  const acceptLanguageHeader = req.headers["accept-language"];
  if (!acceptLanguageHeader) return defaultLocale;

  // Extract the first preferred language from the 'accept-language' header
  const browserLanguage = acceptLanguageHeader.split(",")[0]?.split("-")[0]; // Just the language code
  console.log("Browser language detected:", browserLanguage);

  return validLocales.includes(browserLanguage) ? browserLanguage : defaultLocale;
}

app.prepare().then(() => {
  const server = express();

  // Apply middleware for geolocation and language detection on all routes
  server.use(middleware);

  // Serve Next.js static files explicitly
  server.use("/_next", express.static(".next"));
  server.use("/static", express.static("static"));

  // Handle all other requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${port}`);
  });
});
