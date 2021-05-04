import React from 'react';
import profile from './profile.jpg';
import Slide from 'react-reveal/Slide';

function Home() {
    return (
        <div className="container-fluid">
        <div className="container">
        <div className="row">
            <div className="container-x">
            <Slide left>
    <div className="col-sm-6 float-left" id="home">
      <h3>Hi, I'm Chinonso Osigwe</h3>
  <p>A web developer with a passion for UX/UI design. I create beautifully designed websites for fun and I look forward to doing it everyday professionally.</p>
  <a href="https://europa.eu/!xV93kN" target="_blank" rel="noreferrer">
      <button type="button" className="btn btn-outline-secondary" id="button">Check out my CV</button></a>
        </div>
        </Slide>
        <div className="col-sm-4 float-right">
        <img class="img-fluid" src={profile} alt="" />
        </div>
        </div>
      </div>

      </div>
      </div>
     
    )
}

export default Home;