import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Rohit Singh - Assistant Professor",
  description: "Dr. Rohit Singh, Assistant Professor at NIT Jalandhar specializing in Wireless Communication, Interference Mitigation, and Intelligent Reflecting Surfaces.",
  keywords: "Dr. Rohit Singh, NIT Jalandhar, Wireless Communication, Research, Electronics Communication Engineering",
  authors: [{ name: "Dr. Rohit Singh" }],
  openGraph: {
    title: "Dr. Rohit Singh - Assistant Professor",
    description: "Expert in Wireless Communication and Electronics Engineering at NIT Jalandhar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
