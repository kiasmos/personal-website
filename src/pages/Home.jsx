import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logoGithub from "../assets/github_logo.png";
import logoTwitter from "../assets/twitter-icon.png";
import picHome from "../assets/Saly-13.svg";
import handHome from "../assets/Saly-8.svg";

export default function Home() {
  console.log("home rendered");

  return (
    <>
      <header className="home-all">
        <img src={picHome} alt="#" className="pic-home" />
        <h1 className="home-h1" aria-label="Hi! I'm a developer">
          Hey there 👋 <br /> I am a&nbsp;<span className="typewriter"></span>
        </h1>
        <span className="home-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
        <div className="home-btns">
          <button className="home-about-me-btn">
            <Link to="/about"> About me </Link>
          </button>
          <button className="home-portfolios-btn">
            <Link to="/portfolios">😮 Let’s see portfolios</Link>
          </button>
        </div>
        <img src={handHome} alt="#" className="hand-home" />
      </header>
      <footer className="footer-all">
        <span className="copyright">Copyright © 2021 All rights reserved.</span>
        <div className="social-media">
          <Link to="//github.com/kiasmos">
            <img src={logoGithub} alt="#" />
          </Link>
          <Link to="//twitter.com/k1asmos">
            <img src={logoTwitter} alt="" />
          </Link>
        </div>
        <span>Source code available</span>
      </footer>
    </>
  );
}
