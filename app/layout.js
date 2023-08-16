import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexusCraft Creative agency",
  description:
    "NexusCraft Creative agency is a NexusCraft Creative agency providing a variety of serivces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* theme links  */}

        <link rel="stylesheet" href="..//assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="..//assets/css/fontawesome-all.css" />
        <link rel="stylesheet" href="..//assets/css/animate.css" />
        <link rel="stylesheet" href="..//assets/css/flaticon.css" />
        <link rel="stylesheet" href="..//assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="..//assets/css/video.min.css" />
        <link rel="stylesheet" href="..//assets/css/slick.css" />
        <link rel="stylesheet" href="..//assets/css/slick-theme.css" />
        <link rel="stylesheet" href="..//assets/css/style.css" />
        {/* theme links  */}

        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* titillium font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className=" text-black">
        {children}

        {/* <!-- For Js Library --> */}
        <script src="../public/assets/js/jquery.min.js"></script>
        <script src="../public/assets/js/bootstrap.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/jarallax.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/appear.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/tilt.jquery.min.js"></script>
        <script src="assets/js/knob.js"></script>
        <script src="assets/js/parallax-scroll.js"></script>
        <script src="assets/js/masonry.pkgd.min.js"></script>
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="assets/js/slick.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/script.js"></script>
        
      </body>
    </html>
  );
}
