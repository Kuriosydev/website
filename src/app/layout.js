import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import { Montserrat } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add weights explicitly
  variable: "--font-montserrat", // Custom CSS variable
});


export const metadata = {
  title: "KURIXEL",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="apple-touch-icon" href="/favicon.png" /> */}

        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/obelixpro-2" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/godzilla" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body className={`${montserrat.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <Header />
        <main className="flex-1 w-full ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
