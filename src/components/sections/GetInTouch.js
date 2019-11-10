import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

export default class WhoIAm extends React.Component {

  render() {

    const contactDetails = [
      {id: 1, class: 'email', link: 'mailto:lizhamburger@gmail.com', description: 'lizhamburger@gmail.com'},
      {id: 2, class: 'phone', link: 'tel:+447969324882', description: '+44 (0) 7 969 324 882'},
      {id: 3, class: 'linkedin', link: 'https://www.linkedin.com/in/elizabeth-hamburger/', description: 'Liz Hamburger', target:'_blank', rel: 'noopener noreferrer'},
    ];

    const contactList = contactDetails.map((item, index) => {
      return (
        <li className={`list-item list-item--contact ${item.class}`} key={index}>
          <a href={item.link} target={item.target} rel={item.rel}>{item.description}</a>
        </li>
      )
    });

    const styles = {
      section: {
        backgroundColor: '#FFEBF0',
        paddingBottom: '1px',
      },
      titleContainer: {
        position: 'relative',
        height: '50px',
      },
    }

    return (
      <section className="get-in-touch" style={styles.section} name="#getInTouch" id="getInTouch">
        <div className="container">
          <span className="sub-title">Get in touch</span>
          <div style={styles.titleContainer}>
            <h2>
            Let's talk
            <Controller>
              <Scene duration={300}
                pin={false}
                reverse={false}
                offset={-180}
                indicators={true}
                triggerElement="#svgHighlightContact"
              >
                {(progress, event) => {
                  return (
                    <Tween 
                      from={{
                        css: {
                          width: '0',
                        },
                        ease: 'Circ.easeOutExpo',
                      }}
                      to={{
                        css: {
                          width: '100%',
                        },
                        ease: 'Circ.easeOutExpo',
                      }}
                      totalProgress={progress}
                      paused
                      playState={
                        (event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' :  null }
                    >
                      <span className="highlight highlight--long highlight--white" id="svgHighlightContact">
                      </span>
                    </Tween>
                  );
                }}
              </Scene>
            </Controller>
            </h2>
          </div>

          <div className="content-wrapper content-wrapper--white">
            <div className="row">
              <div className="col-lg-6 border--right-lg">
                <div className="inner-wrapper inner-wrapper--left">
                  <p>I love talking as much as I do writing, so don’t hesitate to get in touch.
                  <br />
                  <br />
                  I’m open to new opportunities espeicallty those that involve helping others. Also please get in touch if you want to partner on a Triangirls event.
                  </p>
                  <hr className="hr hr--vertical-lg" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-wrapper inner-wrapper--right">
                  <ul className="contact-list">
                    {contactList}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="sub-title sub-title--pink text-center"><a href="https://www.lukeowaincharles.co.uk/" target="_blank" rel="noopener noreferrer">Site built by Luke Charles</a></p>
        </div>  
      </section>
    )
  }
}
