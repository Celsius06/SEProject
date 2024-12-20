import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from './../assets/images/hero-img01.jpg';
import heroImg02 from './../assets/images/hero-img02.jpg';
import heroVid from './../assets/images/hero-video.mp4';
import wordImg from './../assets/images/world.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../styles/SearchBar';
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg = '6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle="Discover your new adventure" className="subtitle-gradient" />
                  <img src={wordImg} alt= "" />
                </div>
                <h1>
                  Explore The World With <span className="highlight">TAB</span>
                </h1>
                <p className="hero__description">
                  Explore the world, find new adventures, and make unforgettable memories.
                </p>
                <a href="#cta" className="primary__btn1">
                  Start Your Journey
                </a>
              </div>
            </Col>
            
            <Col lg = "2">
              <div className="hero__img-box mt-2">
                <img src = {heroImg} alt = ""/>
              </div>
              
            </Col>
            <Col lg = "2">
              <div className="hero__img-box mt-5">
                <video src = {heroVid} alt = "" controls/>
              </div>
            </Col>
            <Col lg = "2">
              <div className="hero__img-box mt-4">
                <img src = {heroImg02} alt = ""/>
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/*Hero section start*/}
      <section>
        <Container>
          <Row>
            <Col lg = '3'>
              <h5 className= "services_subtitle"></h5>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
