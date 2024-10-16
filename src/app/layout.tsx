import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Initialize the fonts with the correct configurations and use "font-display: swap"
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap", // Non-blocking font load
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "500", "600", "700"], // Limit to necessary font weights
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <NavbarDemo />
        {children}
        <Footer />

      
      </body>
    </html>
  );
}
