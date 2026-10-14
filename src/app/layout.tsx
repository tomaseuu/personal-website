import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Thomas Le | Personal Website",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
