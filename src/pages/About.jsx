import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logoGithub from "../assets/github_logo.png";
import logoTwitter from "../assets/twitter-icon.png";
import person from "../assets/about.png";

export default function About() {
  return (
    <>
      <header className="about-all">
        <div className="about-head">
          <img src={person} alt="" />
          <span>
            I am Arzu Ibrahim <br />
            <span className="profeccion">a Front-End Developer</span>
          </span>
        </div>

        <div className="aboutme-spans">
          <div className="span-head">
            The standard Lorem Ipsum passage, used since the 1500s
          </div>
          <div className="span-descrip">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="aboutme-spans">
          <div className="span-head">1914 translation by H. Rackham</div>
          <div className="span-descrip">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure.
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
