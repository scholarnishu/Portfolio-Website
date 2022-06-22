import React from "react";

const Banner = () => {
  return (
    <div>
      <section id='fslider' class='fslider'>
        <div class='slider'>
          <ul class='slides '>
            <li>
              <img src='../images/slides/slideOne.jpg' alt='slide one' />
              <div class='caption center-align white-text'>
                <h2> &lt;/&gt;</h2>
                <h6 class='light text-lighten-3'>
                  <span style={{ color: "#F5D76E" }}>Freelance WEB</span>{" "}
                  developer
                </h6>
                <div class='row '>
                  <div class='col l12 s12 '>
                    <a
                      class='waves-effect waves-light btn-small slide-btn'
                      href='#description'>
                      <i class='material-icons left'>thumb_up</i>
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src='../images/slides/slideThree.jpg' alt='slide one' />
              <div class='caption center-align white-text'>
                <h2> &lt;/&gt;</h2>
                <h6 class='light text-lighten-3'>
                  <span style={{ color: "#F5D76E" }}>Freelance WEB</span>{" "}
                  developer
                </h6>
                <div class='row '>
                  <div class='col l12 s12 '>
                    <a
                      class='waves-effect waves-light btn-small slide-btn'
                      href='#description'>
                      <i class='material-icons left'>thumb_up</i>
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <img src='../images/slides/slideTwo.jpg' alt='slide one' />
              <div class='caption center-align white-text'>
                <h2> &lt;/&gt;</h2>
                <h6 class='light text-lighten-3'>
                  <span style={{ color: "#F5D76E" }}>Freelance WEB</span>{" "}
                  developer
                </h6>

                <div class='row '>
                  <div class='col l12 s12 '>
                    <a
                      class='waves-effect waves-light btn-small slide-btn'
                      href='#description'>
                      <i class='material-icons left'>thumb_up</i>
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class='support'>
          <div>
            <a href='https://github.com/thecyberbaby'>
              <img src='images/icons/github.png' alt='github' />
            </a>

            <a
              href='https://www.linkedin.com/in/nishant-sharma-b016a818b/'
              style={{ marginLeft: "20px" }}>
              <img src='images/icons/linkedin.ico' alt='linkedin' />
            </a>

            <a
              href='https://www.instagram.com/thecyberbaby/'
              style={{ marginLeft: "20px" }}>
              <img src='images/icons/instagram.ico' alt='instagram' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
