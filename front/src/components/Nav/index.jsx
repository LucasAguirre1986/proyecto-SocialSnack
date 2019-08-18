import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      classNav: 'navHome'
    };
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.listenScrollEvent = this.listenScrollEvent.bind(this)
  }

  // Evento para abrir menu en responsive
  // =================================================
  toggleCollapse() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // Evento para capturar el scroll ( si supera los 200 modifica la clase del navbar)
  // =================================================
  listenScrollEvent(e) {
    if (window.scrollY > 200) {
      this.setState({ classNav: 'nav' })
    } else {
      this.setState({ classNav: 'navHome' })
    }
  }

  // Agrega el evento al montarse el componente
  // =================================================
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <Router>
        <br/><br/>
        <MDBNavbar dark expand="md" fixed="top" className={this.state.classNav}>
          <MDBNavbarBrand>
            <img src="/assets/img/logo.png" alt="Logo" className="logo"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} >
            <MDBIcon icon="align-justify" />
          </MDBNavbarToggler>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  className="nav-link Ripple-parent"
                  to="homeSection"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Home
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  className="nav-link Ripple-parent"
                  to="newsSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Novedades
              </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  className="nav-link Ripple-parent"
                  to="autorsSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Autores
              </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  className="nav-link Ripple-parent"
                  to="instagramSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Instagram
              </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  className="nav-link Ripple-parent"
                  to="subscribeSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Suscribirse
              </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;