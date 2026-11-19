import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEENRO Technology | Volunteers",
  description:
    "Discover ways to contribute your skills, collaborate with others, and help build technology with SEENRO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
