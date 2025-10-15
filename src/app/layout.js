import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import "./global.css";
import "./styles/mobile.css";
import "./styles/desktop.css";

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
