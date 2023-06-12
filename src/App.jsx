import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextApi from "./components/ContextApi";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolios from "./pages/Portfolios";
import Journey from "./pages/Journey";
import Blog from "./pages/Blog";
import { useState } from "react";
import "./css/home.css";
import "./css/navbar.css";
import "./css/footer.css";
import "./css/about.css";
import "./css/contact.css";
import "./css/portfolios.css";

function App() {
  // const [products, setProducts] = useState([]);
  // const [basketItem, setBasketItem] = useState([]);

  return (
    <ContextApi.Provider
    // value={(products, setProducts, basketItem, setBasketItem)}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Portfolios">
            <Portfolios />
          </Route>
          <Route exact path="/Journey">
            <Journey />
          </Route>
          <Route exact path="/Blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
