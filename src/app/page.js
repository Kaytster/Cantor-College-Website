import Image from "next/image.js";
import Link from "next/link.js";
import "./layout.js";
import Slideshow from "./components/slideshow.js";


export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};


const Home = () => {
  return (
    <main>
      <section id="slideshow">
        {/* <p>My Slideshow</p> */}
        <Slideshow />
      </section>
      
      <section id="intro">
      <h1>Welcome to Cantor College</h1>
      </section>
      

      <br />
      <div id="dividerSection" />
      <br />

    </main>
  );
};

export default Home;