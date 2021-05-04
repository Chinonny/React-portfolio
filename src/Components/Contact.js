import React from 'react';
import Slide from 'react-reveal/Slide';

function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container-fluid">
            <div className="container">
            <h3 className="title text-center">Contact Me</h3>
            <div className="contact">
            <h2>Get in Touch</h2>
            <Slide left>
            <div className="contact-icons"> 
           <a href="https://www.github.com/Chinonny" target="_blank" rel="noreferrer"><i className='fab fa-github'></i></a>
           <a href="https://twitter.com/CodeLover_co" target="_blank" rel="noreferrer"><i className='fab fa-twitter'></i></a>
           <a href="https://www.facebook.com/achebe.uche" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
           <a href="https://www.linkedin.com/in/chinonso-osigwe/" target="_blank" rel="noreferrer"><i className='fab fa-linkedin'></i></a>
           <a href="https://join.skype.com/invite/aVlbNb2y1H8W" target="_blank" rel="noreferrer"><i className='fab fa-skype'></i></a>
          </div>
            </Slide>
            <div className="mail">chinonny.osigwe@gmail.com</div>
            </div>
            </div>
            </div>

        </section>
    )
}

export default Contact;