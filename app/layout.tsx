import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Feud | Choose Your Showdown",
  description: "A host-controlled survey showdown with Work, Family, Kids, Food, Hollywood, and Music game packs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
