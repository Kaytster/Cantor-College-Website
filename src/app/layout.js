import Header from "@/app/components/header";
import Footer from "./components/footer";
import Link from "next/link";
import "@/app/global.css";
import "@/app/styles/mobile.css";
import "@/app/styles/desktop.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    
      <body>
          <Header />
          {children}
          
        <footer>
            <Footer />
        </footer>

      </body>
    </html>
  );
}
