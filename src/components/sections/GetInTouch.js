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
        width: '240px',
        display: 'inline-block'
      },
    }

    return (
      <section className="get-in-touch" style={styles.section} name="#getInTouch" id="getInTouch">
        <div className="container">
          <span className="sub-title">Get in touch</span>
          <div>
            <h2>
            <span className="highlight-wrapper" style={styles.titleContainer}>
              
              <Controller>
                <Scene duration={300}
                  pin={false}
                  reverse={false}
                  offset={-180}
                  indicators={false}
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
                        <svg id="svgHighlightContact" className="hero__highlight hero__highlight--bottom-minus-10" width="800" height="37" viewBox="0 0 800 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M33.2376 34.5692C43.4919 33.6914 54.2215 33.3769 64.7297 33.1497C70.6952 33.0238 76.6315 32.9574 82.5946 32.9111C91.129 32.8424 99.6619 32.8236 108.194 32.8446C124.464 32.8781 140.732 33.0014 157.026 33.1548C189.642 33.462 222.232 33.729 254.837 33.4977C288.645 33.2593 322.453 33.0607 356.262 32.8023C388.32 32.5553 420.351 32.3079 452.432 32.2106C484.541 32.1036 516.621 32.0462 548.711 31.6499C581.54 31.2416 614.386 31.1923 647.257 31.2131C662.844 31.2194 678.488 31.1865 694.007 30.7535C702.109 30.5207 710.212 30.248 718.288 29.9551C726.2 29.6704 734.162 29.5159 742.126 29.3215C749.461 29.1503 756.675 29.3168 763.996 29.5841C769.224 29.4304 773.244 28.5261 776.001 26.8706C777.482 25.8197 778.991 24.779 780.472 23.728C783.235 20.9461 784.608 18.0497 784.643 15.0693C784.815 12.0804 783.59 9.16631 780.996 6.32739C779.579 5.24561 778.135 4.1735 776.718 3.09173C774.062 1.37867 770.099 0.389434 764.884 0.124588C760.861 0.201419 756.811 0.307858 752.789 0.364758C749.123 0.415473 745.432 0.376203 741.742 0.336934C733.867 0.27309 726.018 0.289265 718.169 0.325373C701.84 0.400863 685.535 0.616168 669.208 0.621897C637.567 0.63415 605.908 0.3272 574.285 0.668623C557.324 0.847049 540.389 1.08556 523.456 1.25431C508.055 1.40945 492.629 1.45468 477.232 1.5002C444.439 1.58993 411.644 1.78928 378.874 2.06866C346.514 2.34243 314.128 2.57605 281.767 2.86975C263.877 3.02832 245.988 3.15699 228.073 3.25548C212.045 3.34413 195.968 3.21295 179.919 3.102C147.054 2.88191 114.218 2.62225 81.3905 2.98077C73.3206 3.06438 65.2485 3.21775 57.1732 3.48075C50.6309 3.69028 44.085 4.0194 37.6454 4.44934C32.6581 4.78507 27.8282 5.3418 22.9992 5.86863C20.1732 6.17751 17.3964 6.66637 14.9452 7.23844C10.0643 8.58219 6.67526 10.3306 4.7508 12.4834C0.223813 16.6024 -0.500705 21.5892 1.44552 25.9765C2.40513 28.6185 4.76469 31.0861 8.55157 33.3794C10.3893 34.1068 12.2543 34.8344 14.092 35.5618C18.3809 36.6243 22.673 36.67 27.0231 35.6994C28.9788 35.2317 31.0683 34.8652 33.2376 34.5692Z" fill="white"/>
                        </svg>
                      </Tween>
                    );
                  }}
                </Scene>
              </Controller>
              <span className="element--absolute">
                Let's talk
              </span>
            </span>
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
