import React from 'react';
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom';
//import logo from './../../assets/images/logo.png'
import logo from './../../assets/images/TAB.gif'
import './header.css'
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
            {/*===============Logo Start====================*/}
             <div className="logo">
              <img src = {logo} alt = ""/>
            </div> 
            
            {/*===============Logo End====================*/}
            {/*===============Menu Start====================*/}
            <div className= "navigation">
              <ul className= "menu d-flex align-items-center gap-5">
                {
                  nav_links.map((item, index)=>(
                    <li className="nav__item" key = {index}>
                      <NavLink to={item.path}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/*===============Menu End====================*/}
            <div className="nav__right d-flex align-items-center gap-4 ">
              <div className="nav__btns d-flex align-items-center gap-4 ">
                <Button className = "btn secondary__btn"><Link to='/login'>Login</Link></Button>
                <Button className = "btn primary__btn"><Link to='/register'>Register</Link></Button>

              </div>
              <span className="mobile_menu">
              <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};


export default Header;