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
            <h5>Bachelor of Technology</h5>
            <h6>Computer Science & Engineering</h6>
            <h6> 2016-20 </h6>

            <h5 style={{ marginTop: "3rem" }}>12th Standard</h5>
            <h6>Science and Mathematics</h6>
            <h6> 2015-16 </h6>

            <h5 sstyle={{ marginTop: "3rem" }}>10th Standard</h5>
            <h6>Science and Mathematics</h6>
            <h6> 2013-14 </h6>

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

                <div className='carousel'>
                <a className='carousel-item' href='#one!'>
                  <img
                    src='docs/certificates/aws-architect-associate.png'
                    alt='awslogo'
                  />
                  <h6 className='white-text center'>AWS SAA</h6>
                </a>

                <a className='carousel-item' href='#two!'>
                  <img
                    src='docs/certificates/docker.png'
                    alt='docker'
                  />
                  <h6 className='white-text center'>Docker</h6>
                </a>
                {/* <a className='carousel-item' href='#three!'>
                  <img
                    src='docs/certificates/aws-pro.png'
                    alt='Kuberetes'
                  />
                  <h6 className='white-text center'>AWS SA-PRO</h6>
                </a> */}
                <a className='carousel-item' href='#four!'>
                  <img
                    src='docs/certificates/mySql.jpeg'
                    alt='cicd'
                  />
                  <h6 className='white-text center'>Mysql</h6>
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
