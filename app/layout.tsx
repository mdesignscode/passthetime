import type { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "./context/globalContext";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Components/Navbar"), { ssr: false });
const Overlay = dynamic(() => import("./Components/Overlay"), { ssr: false });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pass The Time",
  description: "Play Rock, Paper, Scissors with 101 objects, browse hundreds of luxurios food recipes, read hundreds of poems, and much more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen" lang="en">
      <body
        className={`dark:from-secondary dark:to-secondary text-dark bg-gradient-to-r from-secondary to-accent-secondary dark:bg-gradient-to-b overflow-y-hidden h-full ${roboto.className}`}
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
