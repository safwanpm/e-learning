'use client';
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux"; // Import the Provider
import store from "./redux/store"; // Import the Redux store
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-bgcolor dark:bg-black antialiased`}
        style={{ fontFamily: "Inter, sans-serif" }} // Use EquipExtended font
      >
        {/* Wrap children with Redux Provider */}
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
