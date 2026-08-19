import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Thomas Le | Personal Website",
  description: "Personal Portfolio",
};

const themeInitScript = `
  (function () {
    try {
      var key = "theme-preference";
      var saved = localStorage.getItem(key);
      var mode = saved === "light" || saved === "dark"
        ? saved
        : "light";
      var root = document.documentElement;
      root.dataset.themeMode = mode;
      root.dataset.theme = mode;
    } catch (error) {
      document.documentElement.dataset.themeMode = "light";
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
