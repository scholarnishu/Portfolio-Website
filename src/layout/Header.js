import React from "react";

const Header = () => {
  return (
    <div>
      <section className='fnavbar'>
        <div className='navbar-fixed' id='navbar'>
          <nav className='transparent z-depth-0'>
            <div className='nav-wrapper'>
              <a href='#navbar' className='brand-logo '>
                {" "}
                &lt;Nishant /&gt;{" "}
              </a>
              <a
                href='...'
                data-target='mobile-demo'
                className='sidenav-trigger'>
                <i className='material-icons'>menu</i>
              </a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li>
                  <a href='#fslider'>HOME</a>
                </li>
                <li>
                  <a href=' #skills'>SKILLS</a>
                </li>
                <li>
                  <a href='#portfolio'>PORTFOLIO</a>
                </li>
                <li>
                  <a href='#resume'>RESUME</a>
                </li>
                <li>
                  <a href='#contact'>CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className='sidenav' id='mobile-demo'>
          <img
            src='images/icons/favicon.png'
            alt='logo'
            className='side-nav-logo'
          />
          <li>
            <a href='#fslider'>HOME</a>
          </li>
          <li>
            <a href='#skills'>SKILLS</a>
          </li>
          <li>
            <a href='#portfolio'>PORTFOLIO</a>
          </li>
          <li>
            <a href='#resume'>RESUME</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
