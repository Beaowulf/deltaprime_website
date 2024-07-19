import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

// Header
import Header from "@/app/ui/header/navbar";
// Footer
import Footer from "@/app/ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delta Prime",
  description: "Delta Prime Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}

          {/* Footer is outside of the div with the styling because we need it to be full width always */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
