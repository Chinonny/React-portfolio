import React from 'react';
import Slide from 'react-reveal/Slide';
import frontImg1 from './frontImg1.jpg';
import choredoor from './choredoor.jpg';
import sleepImg from './sleepImg.jpg';


function Projects() {
    return (
        <section className="section" id="projects"> 
        <div className="container-fluid">
            <div className="container">
            <h3 className="title text-center">Projects</h3>
            
            <div className="card-deck">
            <Slide top>
            <div className="card">
           <div className="card-img">
               <img className="card-img-top" src={frontImg1} alt="" />
               </div> 
            <div className="card-body">
                <h3>Lifestyle Shopping!</h3>
                <div className="icons">
                <i className='fab fa-html5'></i>
                <i className='fab fa-css3'></i>
                <i className='fab fa-js'></i>
                </div>
                <ul>
                    <li>An e-Commerce website that clones items added to the cart. What excites me about this website is on the design, layout and beautiful interface.</li>
                    <li>I used image scaling, image gliding effects, and modal overlay to make the website a bit engaging and interactive.</li>
                </ul>
             <a href="https://chinonny.github.io/e-commerce-Project/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-secondary" id="button">SEE LIVE</button></a> 
               <a href="https://github.com/Chinonny/e-commerce-Project" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-secondary" id="button"><i className='fab fa-github'></i> SOURCE CODE</button></a> 
            </div>
            </div>
            </Slide>
            <Slide left>
            <div className="card">
            <div className="card-img">
            <img className="card-img-top" src={choredoor} alt="" />
               </div> 
            <div className="card-body">
                <h3>Choredoor Game!</h3>
                <div className="icons">
                <i className='fab fa-html5'></i>
                <i className='fab fa-css3'></i>
                <i className='fab fa-js'></i>
                </div>
                <ul>
                    <li>A single-page website that plays a fully functional, exciting and tact game called chore door!</li>
                    <li>The mission in this game is to open all the door without running into the choreBot and if you manage to do that, you win!</li>
                </ul>
                <a href="https://chinonny.github.io/ChoreDoor-game/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-secondary" id="button">SEE LIVE</button></a> 
               <a href="https://github.com/Chinonny/ChoreDoor-game" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-secondary" id="button"><i className='fab fa-github'></i> SOURCE CODE</button></a> 
            </div>
            </div>
            </Slide>

            <Slide bottom>
            <div className="card">
            <div className="card-img">
            <img className="card-img-top" src={sleepImg} alt="" />
               </div> 
            <div className="card-body">
                <h3>Sleep debt calculator!</h3>
                <div className="icons">
                <i className='fab fa-html5'></i>
                <i className='fab fa-css3'></i>
                <i className='fab fa-js'></i>
                </div>
                <ul>
                    <li>The app checks if you are getting enough sleep per day using a sleep debt calculator that recommends 8hours per day.</li>
                    <li>Your ideal sleep hours is then calculated using the actual sleep hours you provided.</li>
                </ul>
               <a href="https://chinonny.github.io/Sleep-debt-calculator/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-secondary" id="button">SEE LIVE</button></a> 
               <a href="https://github.com/Chinonny/Sleep-debt-calculator" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-secondary" id="button"><i className='fab fa-github'></i> SOURCE CODE</button></a> 
            </div>
            </div>
            </Slide>
            
             </div>
            </div>
             </div>
        </section>
    )
}

export default Projects;