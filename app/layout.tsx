import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GlobalProvider } from "./context/globalContext";
import { Archivo, Big_Shoulders_Display, Red_Hat_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./Components/Navbar";
import Overlay from "./Components/Overlay";

const led = localFont({
  src: "./fonts/Doto-Variable.woff2",
  weight: "400 900",
  variable: "--font-led",
});

const panel = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-panel",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});

const receipt = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-receipt",
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
  themeColor: "#12389e",
};

// Runs before first paint so night mode never flashes the day machine.
const setInitialTheme = `try{var m=localStorage.getItem("colorMode")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.classList.toggle("dark",m==="dark")}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${led.variable} ${panel.variable} ${body.variable} ${receipt.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <GlobalProvider>
          <Navbar />

          {/* night mode cursor light */}
          <div id="spotlight" aria-hidden="true" className="hidden dark:block"></div>

          <Overlay />

          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
