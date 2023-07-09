import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Agency",
  description: "Creative Agency is a creative agency providing a variety of serivces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
          <script src="https://cdn.tailwindcss.com"></script>
          
      </head>
      <body className="bg-[#F6E84E] text-white">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
