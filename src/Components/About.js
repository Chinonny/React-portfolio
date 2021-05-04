import React from 'react';
import Slide from 'react-reveal/Slide';
import wallpaper from '../wallpaper.jpg';



function About() {
    return (
            <section className="section" id="about">
                <div className="container-fluid">
                <div className="container">
                <h3 className="title text-center">About Me</h3>
        <div className="row  align-items-center">
<div className="col-xs-7 h-xs" id="about">
    <Slide left>
    <img src={wallpaper} alt="" className="img-fluid full-width" />
    </Slide>
   
</div>

<div className="col-xs-5 col-xs-12">
<div className="img-fluid bg-img">
    <Slide right>
    <div className="img-fluid about-text">
    <p>As a Front-end developer, my focus is on designing websites that are <strong>B</strong>eautiful, <strong>F</strong>unctional and <strong>F</strong>ast.  I enjoy identifying and solving problems creatively to deliver beautiful, interactive interfaces and user-friendly experience. This I intend to do with the F.I.R.S.T rule which is a design that is <strong>F</strong>lexible, <strong>I</strong>ndependent, <strong>R</strong>eusable, <strong>S</strong>mall and <strong>T</strong>estable. </p>
    <p>I aspire towards a career that will allow me channel my creativity into building web applications that are accessible, scalable and reuseable. </p>
  </div>
  </Slide>
    </div>
</div>
</div>

</div>
</div>
</section>
       
    )
}

export default About;