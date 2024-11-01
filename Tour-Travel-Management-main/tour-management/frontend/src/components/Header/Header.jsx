import React from 'react';
import {Container, Row, Button} from 'reactstrap'
import { NavLink, Link} from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import gifImage from './../../assets/images/TAB.gif'
const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '#',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* <div className="logo">
              <img src = {logo} alt = ""/>
            </div> */}
            <div className="gif-container">
              <img src={gifImage} alt="Animated GIF"/> {/* Add the GIF here */}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};


export default Header;