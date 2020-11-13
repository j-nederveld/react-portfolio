import React from "react";

function Nav() {
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">jp nederveld</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">About <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/portfolio.html">Portfolio</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="pages/contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;