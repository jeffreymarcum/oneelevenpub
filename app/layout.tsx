import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Eleven Publishing",
  description:
    "One Eleven Publishing — Bringing thoughtful stories and ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
