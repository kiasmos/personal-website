import { useContext } from "react";
import ContextApi from "./ContextApi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  console.log("navbar rendered");

  return (
    <nav>
      <NavLink activeClassName="active" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about" exact={true}>
        About
      </NavLink>
      <NavLink activeClassName="active" to="/contact" exact={true}>
        Contact
      </NavLink>
      <NavLink activeClassName="active" to="/portfolios" exact={true}>
        Portfolios
      </NavLink>
      <NavLink activeClassName="active" to="/journey" exact={true}>
        Journey
      </NavLink>
      <NavLink activeClassName="active" to="/blog" exact={true}>
        Blog
      </NavLink>
    </nav>
  );
}
