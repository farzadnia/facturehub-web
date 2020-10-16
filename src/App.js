import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Home from "./Home";
import about from "./about";
import contact from "./contact";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={about} />
          <Route path="/contact" component={contact} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
