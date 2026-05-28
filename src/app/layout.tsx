import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xue Ting Studio | Interior Design",
  description:
    "Thoughtful spaces shaped by material, light, and quiet intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
