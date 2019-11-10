import React from 'react';
import { Link } from 'react-scroll';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

export default class Hero extends React.Component {

  render() {

    return (
      <div className="hero" name="#home">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <p className="sub-title">Portfolio</p>
              <h1>Powered by problems, purpose and people.</h1>
              <Controller>
                <Scene duration={300}
                  pin={false}
                  reverse={false}
                  offset={50}
                  indicators={true}
                  triggerElement="#svgHighlightHero"
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
                        <span className="highlight highlight--long" id="svgHighlightHero"></span>
                      </Tween>
                    );
                  }}
                </Scene>
              </Controller>
              <p className="text-size-20">I'm Liz, a London based Senior Digital Product Designer at Inktrap.</p>
            </div>
            <Link className="button-scroll" to="#whatIDo" spy={true} smooth={true} duration={800} aria-label="Scroll to what I do"></Link>
          </div>
        </div>
      </div>
    )
  }
}