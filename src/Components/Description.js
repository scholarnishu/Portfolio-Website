import React from "react";

const Description = () => {
  return (
    <div>
      <section id='description' className='description '>
        <div className='row container'>
          <div className='col center l6 s12'>
            <img src='../images/vectors/resume.svg' alt='' />
          </div>
          <div
            className='col white-text l6 s12 disc'
            style={{ fontFamily: "Bree" }}>
            <h2 className='center'>About me </h2>
            <p>
              I am a self motivated web designer. I always intented to complete
              work (project) under the give time period with my best of skills
              and experiences.
            </p>
            <p>
              I always keep exploring the development of web and native
              applications using latest technologies as React and Html-CSS and
              etc..
            </p>
            <p>
              My goal is to obtain position as a Senior Software Engineer to
              learn and advance my current skill set and improve the services of
              the establishment.
            </p>
            <p>
              I am skilled In dealing with problems in a resourceful manner and
              negotiating to achieve beneficial agreement.
            </p>
            <p>
              I am always enthusiastic to learn and undertake new challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
