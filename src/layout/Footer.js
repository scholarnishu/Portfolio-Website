import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='f-footer'>
        <div className='row container'>
          <div className='col l4 s12 '>
            <h4>About me</h4>
            <p>
            I'm responsible for the design, management, and maintenance of cloud infrastructure.
            </p>
            <a
              className='waves-effect waves-light btn-small slide-btn'
              href='#description'
              style={{ marginTop: "auto" }}>
              know more &gt;
            </a>
          </div>
          <div className='col l4 right s12'>
            <h4 className='white-text'>Social Links</h4>
            <p className=' text-lighten-4'>Feel free to reach me out</p>
            <p className=' text-lighten-4'>
              over the social media.
            </p>
            <div>
              <a href='https://github.com/thecyberbaby'>
                <img src='images/icons/github.png' alt='github' />
              </a>

              <a
                href='https://www.linkedin.com/in/thecyberbaby/'
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
        </div>

        <div className='footer-copyright'>
          <div className='row container'>
            <div class='col l4 s12'>© 2022 Copyright @ Nishant Sharma</div>
            <div className='col l4 right s12 '>
              <a
                className='white-text text-lighten-4 '
                href='https://www.instagram.com/thecyberbaby/'>
                Designed in India with
                <span>
                  <i className='material-icons'>favorite</i>
                </span>{" "}
                by : Nishant Sharma
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
