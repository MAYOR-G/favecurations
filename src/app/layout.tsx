import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FaveCurations | Thoughtfully Curated Gifts",
  description:
    "Experience the art of gifting with FaveCurations. Premium, thoughtfully curated gifts for birthdays, corporate events, weddings, and every meaningful occasion.",
  keywords: [
    "luxury gifts",
    "curated gifts",
    "corporate gifting",
    "personalized gifts",
    "wedding gifts",
    "premium gift boxes",
  ],
  openGraph: {
    title: "FaveCurations | Thoughtfully Curated Gifts",
    description:
      "Experience the art of gifting with FaveCurations. Premium, thoughtfully curated gifts for every meaningful occasion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
