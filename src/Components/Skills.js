import React from 'react';

function Skills() {
    return  (
        <section className="section" id="skills">
                <h3 className="title text-center">Skills</h3>
                <div className="container-fluid">
                    <div className="container">
        <div className="row" id="skill-content">
          <div className="col-xl-6 col-lg-12 col-md-12">
          <h6 className="text">Technologies I work with</h6>
            <div className="row"  id="first-row">
            <div className="col-lg-4 col-md-6 col-sm-6">
            <i className='fab fa-html5'></i>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <i className='fab fa-css3'></i>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <i className='fab fa-js'></i>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <i className='fab fa-react'></i>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <span class="badge badge-secondary">Hb.js</span>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
            <span class="badge badge-secondary">Bs4</span>
            </div>

            </div>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12">
          <h6 className="text">Technologies I have interest in</h6>
              <div className="row"  id="second-row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                <i className='fab fa-wordpress'></i>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <i className='fab fa-sass'></i>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <span class="badge badge-secondary">UX/UI</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <i className='fab fa-node-js'></i>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <span class="badge badge-secondary">jquery</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <i className='fab fa-vuejs'></i>
                </div>
              </div>
          </div>
</div>
</div>
</div>
</section>
    )
}

export default Skills;