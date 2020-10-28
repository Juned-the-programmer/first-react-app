import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">React App</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pops-and-state">Pops and State</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Conditional-Looping">Connditional And Looping</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Event-binding">Event Binding</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Component-Interaction-Advanced">Component Interaction</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link active" to="/Contact-App">Contact App</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Github-Profile-Search">Github Profile Search</Link>
            </li>
          </ul>
        </div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;