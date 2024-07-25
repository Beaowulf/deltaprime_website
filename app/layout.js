import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/app/ui/header/navbar";
import Footer from "@/app/ui/footer/footer";
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
          <div id="__next">
            <Header />
            {children}
          </div>
          {/* might put these 2 together
          or contact into Footer
          */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
