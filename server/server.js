import express from "express";
import next from "next";
import dotenv from "dotenv";
import geoip from "geoip-lite";

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 5000;

const validCountryISOs = ["us", "ca", "gb", "fr", "de", "nl"];
const validLocales = ["en", "fr", "nl", "de", "es", "ta", "hi"];
const defaultLocale = "en";

function middleware(req, res, next) {
  try {
    const pathname = req.path;

   
    
    console.log("Current path:", pathname);
    const pathParts = pathname.split("/").filter(Boolean);
    const userCountryISO = pathParts[0]?.toLowerCase();
    const userLanguage = pathParts[1]?.toLowerCase();

    const isCountryValid = validCountryISOs.includes(userCountryISO);
    const isLanguageValid = validLocales.includes(userLanguage);

    if (isCountryValid && isLanguageValid) {
      console.log("Valid country and language, proceeding...");
      return next();
    }

    const userLocation = fetchUserLocation(req);
    const { country: detectedCountry } = userLocation;
    const browserLanguage = getBrowserLanguage(req);

    if (userCountryISO === detectedCountry && userLanguage === browserLanguage) {
      console.log("User is already on the correct URL, proceeding...");
      return next();
    }

    const newUrl = `/${detectedCountry}/${browserLanguage}${pathname.replace(
      `/${userCountryISO}/${userLanguage}/`,
      ""
    )}`;

    console.log("Redirecting to:", newUrl);
    return res.redirect(newUrl);
  } catch (error) {
    console.error("Middleware error:", error);
    res.status(500).send("Internal Server Error");
  }
}

function fetchUserLocation(req) {
  try {
    const clientIP =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.connection.remoteAddress;

    if (!clientIP) {
      console.warn("Unable to detect client IP address.");
      return { country: "us", language: "en" };
    }

    console.log("Detected client IP address:", clientIP);
    const geoData = geoip.lookup(clientIP);

    if (!geoData) {
      console.warn("No geolocation data found for IP:", clientIP);
      return { country: "us", language: "en" };
    }

    return {
      country: geoData.country?.toLowerCase() || "us",
      language: "en",
    };
  } catch (error) {
    console.error("Error fetching user location:", error);
    return { country: "us", language: "en" };
  }
}

function getBrowserLanguage(req) {
  try {
    const acceptLanguageHeader = req.headers["accept-language"];
    if (!acceptLanguageHeader) return defaultLocale;

    const browserLanguage = acceptLanguageHeader.split(",")[0]?.split("-")[0];
    return validLocales.includes(browserLanguage)
      ? browserLanguage
      : defaultLocale;
  } catch (error) {
    console.error("Error detecting browser language:", error);
    return defaultLocale;
  }
}

app.prepare().then(() => {
  const server = express();

  server.use(middleware);
  server.use("/_next", express.static(".next"));
  server.use("/static", express.static("static"));

  server.all("*", (req, res) => {
    try {
      return handle(req, res);
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  server.listen(port, (err) => {
    if (err) {
      console.error("Server error:", err);
      process.exit(1);
    }
    console.log(`Server running on http://localhost:${port}`);
  });
});
