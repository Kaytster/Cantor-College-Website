import Image from "next/image";
const Footer = () => {    
    return (
      <footer id="footer">
        <div className="container">
        <h2>Visit our Socials for more updates!</h2>
        <div className="social">
        <Image src="/Images/instaLogo.png" width={10} height={10} alt="Instagram Logo"/> <p>Instagram: @cantorcollege</p>
        </div>
        <div className="social">
        <Image src="/Images/facebookLogo.png" width={10} height={10} alt="Facebook Logo"/> <p>Facebook: @cantorcollegeofficial</p>
        </div>
        </div>
      </footer>
    );
  };
  export default Footer;