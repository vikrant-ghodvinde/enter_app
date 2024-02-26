import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Enter App",
  description: "Enter App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" type="image/x-icon" sizes="any" href="" /> */}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
