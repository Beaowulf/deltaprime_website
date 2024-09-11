import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/app/ui/header/navbar";
import Footer from "@/app/ui/footer/footer";
import LaunchAppModal from "@/app/components/modals/launchAppModal";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Delta Prime",
  description: "Delta Prime Web App",
  name: "robots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
