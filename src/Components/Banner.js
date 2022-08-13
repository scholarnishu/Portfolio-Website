import React from "react";

const Banner = () => {
  return (
    <div>
      <section id='fslider' class='fslider'>
        <div class='slider'>
          <ul class='slides '>
            <li>
              <img src='../images/slides/slideOne.jpg' alt='slide one' />
              <div class='caption center-align dark-text'>
                <h2> &lt;/&gt;</h2>
                <h4 class='light text-lighten-3'>
                  <span style={{ color: "#F6CF65" }}>DevOps</span>{" "}
                  Engineer
                </h4>
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
                <h4 class='light text-lighten-3'>
                  <span style={{ color: "#F6CF65" }}>AWS</span>{" "}
                  Solution Architect
                </h4>
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
                <h4 class='light text-lighten-3'>
                  <span style={{ color: "#F6CF65" }}>DevOps</span>{" "}
                  Engineer
                </h4>
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
      </section>
    </div>
  );
};

export default Banner;
