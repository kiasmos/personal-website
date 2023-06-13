import { useContext } from "react";
import ContextApi from "./ContextApi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  console.log("navbar rendered");

  return (
    <nav>
      <NavLink activeClassName="selectedNav" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink activeClassName="selectedNav" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="selectedNav" to="/contact">
        Contact
      </NavLink>
      <NavLink activeClassName="selectedNav" to="/portfolios">
        Portfolios
      </NavLink>
      <NavLink activeClassName="selectedNav" to="/journey">
        Journey
      </NavLink>
      <NavLink activeClassName="selectedNav" to="/blog">
        Blog
      </NavLink>
    </nav>
  );
}
