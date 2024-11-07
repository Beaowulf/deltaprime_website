import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/app/ui/header/navbar"), { ssr: false });
const Footer = dynamic(() => import("@/app/ui/footer/footer"), { ssr: false });
const LaunchAppModal = dynamic(
  () => import("@/app/components/modals/launchAppModal"),
  { ssr: false }
);

import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "DeltaPrime",
  description: "Delta Prime Web App",
  name: "robots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B7GXPWXM3Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B7GXPWXM3Z');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.className} dark:text-white text-[#565AC2]`}
      >
        <Providers>
          <LaunchAppModal />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
