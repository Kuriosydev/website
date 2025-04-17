import AppLayout from "@/Layouts/AppLayout";
import ThemeProvider from "@/theme/ThemeProvider";
import { Montserrat } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "KURIXEL",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/obelixpro-2" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/godzilla" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col overflow-x-hidden dark:bg-[#212121] `}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange={true}
          defaultTheme="system"
          enableColorScheme={false} // Prevent style mismatch on SSR
        >
          <AppLayout>
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
