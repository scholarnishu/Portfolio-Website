import React from "react";

const Contact = () => {
  return (
    <div>
      <section className='contact'>
        <div id='contact' className='center'>
          <h2>Contact</h2>
        </div>
        <div className='row container'>
          <div className='col l6 s12 center container'>
            <h5 className='white-text' style={{ paddingTop: "10px" }}>
              Leave me a message
            </h5>
            <form
              action='https://formspree.io/f/mpzbegjp'
              method='post'
              target='_blank'>
              <input
                placeholder='Your name'
                type='text'
                tabindex='1'
                name='Full Name'
                className='white-text'
              />

              <input
                placeholder='Your Email Address'
                type='email'
                tabindex='2'
                required
                name='Email'
                className='white-text'
              />

              <input
                placeholder='Your Phone Number'
                type='tel'
                tabindex='3'
                required
                name='Contact no.'
                className='white-text'
              />

              <textarea
                id='textarea1'
                placeholder='Your message'
                name='message'
                className='materialize-textarea white-text'></textarea>

              <button
                name='submit'
                type='submit'
                data-submit='...Sending'
                class='btn-small slide-btn'>
                Submit
              </button>
            </form>
            <div>
              <address className='address'>
                <p class='address-title'>MY ADDRESS :</p>

                <p>
                  <p>
                    <i className='material-icons'>person</i>Nishant Sharma
                  </p>
                </p>
                <p>
                  <i className='material-icons'>mail</i>
                  nishantsharma9358@gmail.com
                </p>
                <p>
                  <i className='material-icons'>place</i>Aligarh - Uttar Pradesh
                  (INDIA)
                </p>
              </address>
            </div>
          </div>
          <div className=' col l5 s12' style={{ marginLeft: "10px" }}>
            <img src='/images/vectors/contact.svg' alt='svg' />
          </div>
        </div>
      </section>

      <hr className='container'></hr>
    </div>
  );
};

export default Contact;
