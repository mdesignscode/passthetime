import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GlobalProvider } from "./context/globalContext";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Components/Navbar"));
const Overlay = dynamic(() => import("./Components/Overlay"));

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Random Stuff",
  description:
    "Play Rock, Paper, Scissors with 101 objects, browse hundreds of luxurios food recipes, read hundreds of poems, and much more!",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#b9cc95",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen" lang="en">
      <body
        className={`dark:from-secondary dark:to-secondary text-dark bg-gradient-to-r from-secondary to-accent-secondary dark:bg-gradient-to-b overflow-y-hidden h-[100dvh] ${roboto.className}`}
      >
        <GlobalProvider>
          <Navbar />

          {/* dark mode cursor spotlight */}
          <div id="spotlight" className="hidden dark:block"></div>

          <Overlay />

          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
