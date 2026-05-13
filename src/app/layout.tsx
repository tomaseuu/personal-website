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
      var mode = saved === "light" || saved === "dark" || saved === "auto"
        ? saved
        : "auto";
      var hour = new Date().getHours();
      var autoTheme = hour >= 18 || hour < 6 ? "dark" : "light";
      var theme = mode === "auto" ? autoTheme : mode;
      var root = document.documentElement;
      root.dataset.themeMode = mode;
      root.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.themeMode = "auto";
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
