import React from 'react';
import { Link } from 'react-scroll';

export default class Hero extends React.Component {

  render() {

    const styles = {
      hero: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '100vh',
        backgroundColor: '#FFEBF0',
      }
    }
    return (
      <div className="hero" style={styles.hero} name="#home">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <p className="sub-title">Portfolio</p>
              <h1>Powered by problems, purpose and people.</h1>
              <p>I'm Liz, a London based Senior Digital Product Designer at Inktrap.</p>
            </div>
            <Link className="button-scroll" to="#whatIDo" spy={true} smooth={true} duration={800} aria-label="Scroll to what I do"></Link>
          </div>
        </div>
      </div>
    )
  }
}