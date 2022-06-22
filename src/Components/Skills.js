import React from "react";

const Skills = () => {
  return (
    <div id='skills'>
      <div className='col center l12 s12'>
        <h2>My Skills</h2>
      </div>
      <section className='fprogress  skills'>
        <div className='row container'>
          <div className='col l6 s12 white-text '>
            <p>LINUX - 75% (RHEL, Debian)</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "75%" }}></div>
            </div>

            <p>JAVASCRIPT - 70%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "70%" }}></div>
            </div>

            <p>REACT - 65%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "65%" }}></div>
            </div>

            <p>HTML CSS - 80%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "80%" }}></div>
            </div>

            <p>MY SQL - 60%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "60%" }}></div>
            </div>

            <p>VS CODE - 85%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "85%" }}></div>
            </div>

            <section id='skills' className='skills'>
              <div className='carousel'>
                <a className='carousel-item' href='#one!'>
                  <img
                    src='images/thumbnails/javascript.png'
                    alt='javascript thumbnail'
                  />
                  <h6 className='white-text center'>Javascript</h6>
                </a>

                <a className='carousel-item' href='#three!'>
                  <img
                    src='images/thumbnails/bootstrap.png'
                    alt='bootstrap thumbnail'
                  />
                  <h6 className='white-text center'>Bootstrap</h6>
                </a>
                <a className='carousel-item' href='#four!'>
                  <img
                    src='images/thumbnails/React.png'
                    alt='react thumbnail'
                  />
                  <h6 className='white-text center'>React</h6>
                </a>
                <a className='carousel-item' href='#five!'>
                  <img
                    src='images/thumbnails/vscode.png'
                    alt='vscode thumbnail'
                  />
                  <h6 className='white-text center'>Vs Code</h6>
                </a>
                <a className='carousel-item' href='#six!'>
                  <img
                    src='images/thumbnails/materialize.png'
                    alt='materialize thumbnail'
                  />
                  <h6 className='white-text center'>Materialize CSS</h6>
                </a>
                <a className='carousel-item' href='#seven!'>
                  <img
                    src='images/thumbnails/htmlCss.png'
                    alt='html css thumbnail'
                  />
                  <h6 className='white-text center'>Html-CSS</h6>
                </a>
                <a className='carousel-item' href='#eight!'>
                  <img
                    src='images/thumbnails/photoshop.png'
                    alt='photoshop thumbnail'
                  />
                  <h6 className='white-text center'>Photoshop</h6>
                </a>

                <a className='carousel-item' href='#ten!'>
                  <img
                    src='images/thumbnails/AdobeXD.png'
                    alt='adobe xd thumbnail'
                  />
                  <h6 className='white-text center'>Adobe-XD</h6>
                </a>
              </div>
            </section>
          </div>
          <div className='col l5 s12 right skillSvg'>
            <img src='/images/vectors/sklills.svg' alt='skills svg' />
          </div>
        </div>
      </section>
      <hr class='container' />
    </div>
  );
};

export default Skills;
