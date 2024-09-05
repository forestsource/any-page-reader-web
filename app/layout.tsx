import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Any Page Reader",
  description: "Transform every web page into an immersive audio experience, available to you anytime.",
  verification: {
    google: "GF-N1i1OkVRz_fxwdFozd29Fd5JT8kNJz32tyortVlM",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
