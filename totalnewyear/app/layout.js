import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const GIP = localFont({
  src: [
    {
      path: "./fonts/GIP-Thin.woff",
      weight: "300",
    },
    {
      path: "./fonts/GIP-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/GIP-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/GIP-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/GIP-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/GIP-Extrabold.woff",
      weight: "800",
    },
    {
      path: "./fonts/GIP-Black.woff",
      weight: "900",
    },
    {
      path: "./fonts/GIP-Heavy.woff",
      weight: "1000",
    },
  ],
  variable: "--font-gip",
});

export const metadata = {
  title: "Total Distribution",
  description: "New Year's Party 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GIP.variable} antialiased`}>
        <div className="fixed top-0 left-0 right-0 z-[1000]">
          <Navbar />
        </div>
        <div className="relative top-28">{children}</div>
      </body>
    </html>
  );
}
