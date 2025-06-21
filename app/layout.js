// app/layout.jsx

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar"; // Import Navbar component
// Import Jost font
import { Jost } from "next/font/google";
import ScrollToTopButton from "@/components/ScrollToTop";
// Import global styles
import "./globals.css";
// Instantiate Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost", // CSS Variable name
  display: "swap",
  // Add weights if needed, e.g., weight: ['300', '400', '500', '600', '700']
});

// Metadata is still recommended for SEO, even in JSX
export const metadata = {
  title: "Ibrahim Mohamed | Portfolio",
  description: "Frontend Developer portfolio showcasing projects and skills.", 
};

// Root layout for the application
export default function RootLayout({ children }) {
  return (
    // Apply the font variable to the html tag
    <html lang="en" className={`${jost.variable}`}>
      {/* Apply the font class name directly to the body */}
      <body
        className={`${jost.className} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar component */}
        <Navbar />
        {/* Main content area - children represent the current page */}
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
