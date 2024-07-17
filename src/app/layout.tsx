import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Navbar";
import Footer from "@/app/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Mekanikal Hidro Jaya Teknik",
  description: "Website PT. Mekahidro Jaya Teknik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
