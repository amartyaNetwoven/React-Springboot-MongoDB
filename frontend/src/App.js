import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactList from "./components/ContactList";
import NavItem from "./components/NavItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      <section>
        <NavItem />
        <ContactList />
      </section>
    );
  }
}

export default App;
