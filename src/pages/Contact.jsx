import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logoGithub from "../assets/github_logo.png";
import logoTwitter from "../assets/twitter-icon.png";
import contactPerson from "../assets/Saly-14.svg";

export default function Contact() {
  return (
    <>
      <header className="header-all">
        <img src={contactPerson} alt="#" />
        <div className="contact-head">
          <h1 className="contact-h1">You can reach me any time🙂 </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p>
            Github:
            <Link className="selectedNav" to="//github.com/kiasmos">
              {" "}
              kiasmos
            </Link>
          </p>
          <p>
            Twitter:
            <Link className="selectedNav" to="//github.com/kiasmos">
              {" "}
              k1asmos
            </Link>
          </p>
          <p>
            Telegram:
            <Link className="selectedNav" to="//github.com/kiasmos">
              {" "}
              kiasmoss
            </Link>
          </p>
          <p>
            Email:
            <Link
              className="selectedNav"
              to="//mail.google.com/mail/u/1/#inbox"
            >
              {" "}
              brahim.arzu@gmail.com
            </Link>
          </p>
          <div className="home-btns">
            <button className="home-about-me-btn">About me</button>
            <button className="home-portfolios-btn">
              😮 Let’s see portfolios
            </button>
          </div>
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
