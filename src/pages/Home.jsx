import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logoGithub from "../assets/github_logo.png";
import logoTwitter from "../assets/twitter-icon.png";

export default function Home() {
  console.log("home rendered");

  return (
    <>
      <header className="home-all">
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
          <button className="home-about-me-btn">About me</button>
          <button className="home-portfolios-btn">
            😮 Let’s see portfolios
          </button>
        </div>
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
