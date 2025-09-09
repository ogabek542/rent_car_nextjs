import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Shop - Find, Book, or Rent a Car",
  description:
    "Streamline your car rental experience with our effortless booking process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
