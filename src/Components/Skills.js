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
            <p>AWS - 85% </p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "85%" }}></div>
            </div>

            <p>DOCKER - 80%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "80%" }}></div>
            </div>

            <p>KUBERNETES - 75%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "75%" }}></div>
            </div>

            <p>TERRAFORM - 75%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "75%" }}></div>
            </div>

            <p>CI / CD - 80%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "80%" }}></div>
            </div>

            <p>LOGS & MONITORING - 85%</p>
            <div id='myProgress'>
              <div id='myBar' style={{ width: "75%" }}></div>
            </div>

            <section id='skills' className='skills r'>
              <div className='carousel'>
                <a className='carousel-item' href='#one!'>
                  <img
                    src='images/thumbnails/awslogo.jpg'
                    alt='awslogo'
                  />
                  <h6 className='white-text center'>AWS</h6>
                </a>

                <a className='carousel-item' href='#three!'>
                  <img
                    src='images/thumbnails/docker.jpg'
                    alt='docker'
                  />
                  <h6 className='white-text center'>Docker</h6>
                </a>
                <a className='carousel-item' href='#four!'>
                  <img
                    src='images/thumbnails/k8s.jpg'
                    alt='Kuberetes'
                  />
                  <h6 className='white-text center'>Kubernetes</h6>
                </a>
                <a className='carousel-item' href='#five!'>
                  <img
                    src='images/thumbnails/cicd.jpg'
                    alt='cicd'
                  />
                  <h6 className='white-text center'>CI / CD</h6>
                </a>
                <a className='carousel-item' href='#six!'>
                  <img
                    src='images/thumbnails/terraform.jpeg'
                    alt='materialize thumbnail'
                  />
                  <h6 className='white-text center'>Terraform</h6>
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
