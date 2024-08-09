import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import { useTheme } from "next-themes";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers>
          <Header />
          {children}
          {/* might put these 2 together
          or contact into Footer
          */}
          <LaunchAppModal />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
