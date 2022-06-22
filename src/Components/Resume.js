import React from "react";

const Resume = () => {
  return (
    <div>
      <section className='fresume'>
        <div className='row  l12 s12 '>
          <div className='col l12 s12 center'>
            <div id='resume' className='white-text center container'>
              <h2 style={{ marginTop: "100px" }}>Resume and Education</h2>
            </div>
          </div>
        </div>

        <div id='resume' className='row container'>
          <div className='col l6 s12 center ' style={{ marginTop: "50px" }}>
            <img src='/images/vectors/manOnTable.svg' alt='svg' />
          </div>
          <div className='col l6 s12 white-text' style={{ marginTop: "20px" }}>
            <h5>Bachelor of Technology - CSE</h5>
            <h6> 2016-20 </h6>
            <h6>Guru Jambheshwar University, Hisar (Haryana)</h6>
            <h5 style={{ marginTop: "3rem" }}>12th from Up Board</h5>
            <h6> 2015-16 </h6>
            <h6>H.B. Inter College, Aligarh (U.P.)</h6>
            <h5 sstyle={{ marginTop: "3rem" }}>10th from Up Board</h5>
            <h6> 2013-14 </h6>
            <h6>H.B. Inter College, Aligarh (U.P.)</h6>
            <a
              className='waves-effect waves-light btn-small slide-btn'
              href='docs/Resume.pdf'>
              Resume
            </a>
            <a
              className='waves-effect disabled  waves-light btn-small slide-btn'
              href='docs/Resume.pdf'>
              Full CV
            </a>

            <div style={{ paddingTop: "100px" }}>
              <div className='carousel'>
                <div className='center white-text'>
                  <h5>Certifications</h5>
                </div>

                <div className='certificate'>
                  <a class='carousel-item' href='#two!'>
                    <img src='docs/certificates/mySql.jpeg' alt='MySql' />
                    <h6 className='white-text center'>My SQL</h6>
                  </a>

                  <a class='carousel-item' href='#two!'>
                    <img
                      src='docs/certificates/ReactJS-Certificate.png'
                      alt='reactjs'
                    />
                    <h6 className='white-text center'>React JS</h6>
                  </a>

                  <a class='carousel-item' href='#two!'>
                    <img src='docs/certificates/htmlCss.jpeg' alt='HtmlCss' />
                    <h6 className='white-text center'>HTML5 CSS3</h6>
                  </a>

                  <a class='carousel-item' href='#two!'>
                    <img src='docs/certificates/mernStack.jpg' alt='HtmlCss' />
                    <h6 className='white-text center'>MERN STACK</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class='container' />
    </div>
  );
};

export default Resume;
