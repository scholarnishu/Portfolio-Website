import React from "react";

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div>
        <h2 class='center' style={{ paddingBottom: "50px" }}>
          My Projects
        </h2>
      </div>

      <div className='row container portfolio-row'>
        <div className='col l6 s12 portfolio'>
          <h5>Export business website - (HTML_CSS)</h5>

          <div class='slider'>
            <ul class='slides'>
              <li>
                <img src='/images/slides/OTP_EXIM1.png' alt='otp exim1' />
              </li>
              <li>
                <img src='/images/slides/OTP_EXIM2.png' alt='otp exim2' />
              </li>
              <li>
                <img src='/images/slides/OTP_EXIM3.png' alt='otp exim3' />
              </li>
            </ul>
          </div>
        </div>

        <div className='col l6 s12 portfolio-col-2'>
          <h5>Personal portfolio - (React)</h5>

          <div class='slider'>
            <ul class='slides '>
              <li>
                <img src='/images/slides/PORTFOLIO1.png' alt='portfolio 1' />
              </li>
              <li>
                <img src='/images/slides/PORTFOLIO2.png' alt='portfolio 2' />
              </li>
              <li>
                <img src='/images/slides/PORTFOLIO3.png' alt='portfolio 3' />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='row container portfolio-row'>
        <div className='col l6 s12 portfolio'>
          <h5>Github user search app - (React)</h5>

          <div class='slider'>
            <ul class='slides'>
              <li>
                <img
                  src='/images/slides/GITHUB_APP1.png'
                  alt='github search app 1'
                />
              </li>
              <li>
                <img
                  src='/images/slides/GITHUB_APP2.png'
                  alt='github search app 2'
                />
              </li>
              <li>
                <img
                  src='/images/slides/GITHUB_APP3.png'
                  alt='github search app 3'
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='col l6 s12 portfolio-col-2'>
          <h5>LCO Courses - (React)</h5>

          <div class='slider'>
            <ul class='slides '>
              <li>
                <img src='/images/slides/LCO_COURSES1.png' alt='lco courses1' />
              </li>
              <li>
                <img src='/images/slides/LCO_COURSES2.png' alt='lco courses2' />
              </li>
              <li>
                <img src='/images/slides/LCO_COURSES3.png' alt='lco courses3' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
