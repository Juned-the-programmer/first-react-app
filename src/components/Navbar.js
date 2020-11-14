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

            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pops and State
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/pops">Pops</Link>
                <Link class="dropdown-item" to="/state">State</Link>
              </div>
                {/* <Link className="nav-link active" to="/pops-and-state">Pops and State</Link> */}
            </li>

            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Conditional And Looping
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/condition">Conditional</Link>
                <Link class="dropdown-item" to="/conditioncheck">Conditional Check</Link>
                <Link class="dropdown-item" to="/Loop">Loop</Link>
              </div>
              {/* <Link className="nav-link active" to="/Conditional-Looping">Connditional And Looping</Link> */}
            </li>

            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/Eventcard">Event Card</Link>
                <Link class="dropdown-item" to="/Formevent">Form Event</Link>
                <Link class="dropdown-item" to="/Productitem">Product Item</Link>
                <Link class="dropdown-item" to="/Formeventbind">Form Event Bind</Link>
              </div>
              {/* <Link className="nav-link active" to="/Event-binding">Event Binding</Link> */}
            </li>

            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Component Interaction
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/Basic">Basic</Link>
                <Link class="dropdown-item" to="/InterMediate">InterMediate</Link>
                <Link class="dropdown-item" to="/Advanced">Advanced</Link>
                <Link class="dropdown-item" to="/Context-API">Context-API</Link>
                <Link class="dropdown-item" to="/Props-Drillling">Props-Drillling</Link>
              </div>
              {/* <Link className="nav-link active" to="/Component-Interaction-Advanced">Component Interaction</Link> */}
            </li>

            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Http and Life Cycle
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/Http-call-axios">Http Call</Link>
                <Link class="dropdown-item" to="/Life-Cycle-of-component">Life Cycle</Link>
              </div>
              {/* <Link className="nav-link active" to="/Contact-App">Contact App</Link> */}
            </li>

            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Applications
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/Github-Profile-Search">Github Profile Search</Link>
                <Link class="dropdown-item" to="/Contact-App">Contact App</Link>
              </div>
              {/* <Link className="nav-link active" to="/Github-Profile-Search">Github Profile Search</Link> */}
            </li>
            
          </ul>
        </div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;