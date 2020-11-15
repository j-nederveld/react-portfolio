import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import Hero from './components/Jumbotron';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: "JP Nederveld",
    headerLinks: [
      { title: "Home", path: "/home" },
      { title: "Contact", path: "/contact" },
      { title: "Portfolio", path: "/portfolio" }
    ],
    home: {
      title: "Creative Solutions"
    },
    portfolio: {
      title: "Portfolio"
    },
    contact: {
      title: "Let's Work Together"
    }
  }
}
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="md">
            <Navbar.Brand>JP Nederveld</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Home title={this.state.home.title} />} />
          <Route path="/portfolio" exact render={() => <Portfolio title={this.state.portfolio.title} />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
