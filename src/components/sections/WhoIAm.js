import React from 'react';
import { Event } from '../Tracking';

export default class WhoIAm extends React.Component {

  render() {

    const articles = [
      {id: 1, description: 'So you’ve lost your design mojo? Well here’s how to get it back!', link: 'https://medium.com/inktrap/so-youve-lost-your-design-mojo-well-here-s-how-to-get-it-back-fad71121681'},
      {id: 2, description: 'Designers — No one cares about the design like you do.', link: 'https://medium.com/what-liz-learnt/what-i-learnt-this-week-designers-no-one-cares-about-the-design-like-you-do-33caddc8fb03'},
      {id: 3, description: 'Organising and facilitating a client workshop.', link: 'https://medium.com/what-liz-learnt/what-i-learnt-this-week-organising-and-facilitating-user-testing-f6cee737ce85'},
    ];

    const styles = {
      titleContainer: {
        display: 'inline-block',
        position: 'relative',
        height: '85px'
      },
      width76perc: {
        width: '76%'
      }
    }

    const articleList = articles.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <a
            onClick={() => {Event("Article", "articleLinkClicked", `${item.description}`)}}
            href={item.link}
            className="link-wrapper article-teaser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-size-20">{item.description}</p>
            <span>Read article</span>
          </a>
        </React.Fragment>
      )
    });

    return (
      <section name="#whoIAm" id="whoIAm">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-content">
                <span className="sub-title sub-title--pink">Who I am</span>
                <h2>Want to know 
                  <span className="highlight-wrapper" style={styles.titleContainer}>
                    <svg style={styles.width76perc} className="hero__highlight hero__highlight--bottom-30" id="iamHighlight" width="400" height="23" viewBox="0 0 400 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.2704 21.0182C16.0536 20.4828 20.0123 20.2917 23.8893 20.154C26.0902 20.0776 28.2805 20.0376 30.4806 20.01C33.6294 19.9689 36.7776 19.9583 39.9254 19.972C45.9285 19.9941 51.9306 20.0711 57.9425 20.1666C69.9764 20.3577 82.0006 20.5242 94.0302 20.3862C106.504 20.244 118.977 20.1261 131.451 19.9717C143.279 19.8241 155.097 19.6762 166.934 19.62C178.78 19.558 190.616 19.5262 202.456 19.2873C214.568 19.0412 226.687 19.0144 238.815 19.0305C244.566 19.036 250.337 19.0175 256.063 18.7544C259.052 18.613 262.042 18.4472 265.022 18.269C267.941 18.0959 270.879 18.0023 273.817 17.8843C276.523 17.7804 279.185 17.8829 281.886 18.047C283.815 17.9536 285.298 17.4014 286.315 16.39C286.861 15.7479 287.417 15.1121 287.963 14.47C288.983 12.7702 289.489 11.0003 289.501 9.17888C289.564 7.3523 289.112 5.57133 288.154 3.83614C287.631 3.1749 287.098 2.51956 286.575 1.85832C285.595 0.811167 284.132 0.206213 282.208 0.0438232C280.724 0.0903615 279.23 0.154991 277.746 0.189349C276.393 0.219964 275.031 0.195585 273.67 0.171206C270.765 0.131378 267.869 0.140454 264.972 0.161711C258.948 0.206161 252.932 0.336057 246.908 0.337875C235.234 0.342101 223.554 0.151254 211.886 0.356644C205.628 0.463935 199.38 0.607949 193.133 0.70933C187.45 0.802553 181.759 0.828601 176.078 0.854829C163.979 0.906285 151.879 1.02473 139.789 1.19209C127.849 1.35606 115.9 1.49549 103.961 1.67164C97.3603 1.7667 90.7601 1.84349 84.1502 1.90183C78.2365 1.95436 72.3051 1.87253 66.3836 1.80307C54.258 1.66518 42.1429 1.50311 30.0311 1.71883C27.0537 1.76909 24.0755 1.86199 21.0961 2.02188C18.6823 2.14925 16.2673 2.34971 13.8914 2.61179C12.0514 2.81645 10.2695 3.15618 8.48793 3.47764C7.4453 3.66611 6.42087 3.96457 5.51661 4.31392C3.716 5.13462 2.46591 6.20277 1.75625 7.51819C0.0867116 10.0349 -0.179737 13.0824 0.539092 15.7637C0.8936 17.3784 1.7646 18.8867 3.16218 20.2886C3.84033 20.7332 4.52857 21.1781 5.20673 21.6228C6.7893 22.2726 8.37291 22.3009 9.97773 21.7082C10.6992 21.4226 11.4701 21.1988 12.2704 21.0182Z" fill="#FFDEE6"/>
                    </svg>
                    <span className="element--absolute">
                      more?
                    </span>
                  </span>  
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p>Formally trained as a Graphic Designer, I switched to web design in 2015. After having tonnes of fun designing marketing and portfolio sites, I landed my first role working as a Digital Product Designer for Barclays through We Are Why. Since then I have never looked back and have gone on to work with companies mainly in the Finance and Legal sector.
              <br />
              <br />
              Supporting others incredibly important to me. For this reason I’ve recently joined the <a href="https://www.triangirls.com/" target="_blank" rel="noopener noreferrer">Triangirls</a> team to help organise events and workshops to help womxn in tech.
              <br />
              <br />
              I'm a keen writer about Design, I also write about Leadership and Self Improvement.
              </p>
            </div>
          </div>

          
          
          <span className="sub-title">Articles</span>
          <div className="article-wrapper">
            {articleList}
          </div>

          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <p>You can find me writing on <a href="https://twitter.com/LizHamburger" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://www.linkedin.com/in/elizabeth-hamburger/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. But if you're of the visual nature, you can see some of my previous work pre Product Design on <a href="https://dribbble.com/LizHamburger" target="_blank" rel="noopener noreferrer">Dribbble</a>.</p>
            </div>
          </div>
        </div>  
      </section>
    )
  }
}
