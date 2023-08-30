import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Registration",
  description: "Register as an exhibitor for Wedding Salon events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-[100%]" lang="en">
      {/* <Script src="https://sandbox.web.squarecdn.com/v1/square.js" /> */}
      <body className={inter.className + " h-full"}>{children}</body>
    </html>
  );
}
