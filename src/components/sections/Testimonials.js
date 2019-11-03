import React from 'react';
import Slider from 'react-slick';
import Quote from '../../assets/images/quote-marks.svg';
import Jim from '../../assets/images/jim.png';
import Mazz from '../../assets/images/mazz.png';
import Michael from '../../assets/images/michael.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends React.Component {

  render() {

    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const styles = {
      section: {
        backgroundColor: '#FFEBF0',
      },
      sliderContainer: {
        backgroundColor: '#FFF',
        padding: '5px 24px',
      },
      titleContainer: {
        position: 'relative',
        height: '50px',
      },
      title: {
        position: 'absolute',
        top: '-30px',
        zIndex: '1',
      }
    }

    return (
      <section className="testimonials" style={styles.section} name="#Testimonials" id="Testimonials">
        <div className="container">
          <span className="sub-title">Testimonials</span>
          <h2>Don't just take my word for it.</h2>
          <Slider {...settings}>
            <div>
              <div style={styles.sliderContainer}>
                <div className="quote-wrapper">
                  <img alt="quote-marks" src={Quote} />
                </div>
                <p>Liz is an exceptional designer and someone whom I learnt a lot from. She has the ability to breakdown problems and project briefs in complex industries such as Fintech and form effective ideas accordingly. Her work is always underpinned by a clear and intuitive process and invaluable experience.</p>
                <hr />

                <div className="author__wrapper">
                  <div className="author__content">
                    <div className="author__image">
                      <img alt="Jim Silvy" src={Jim} />
                    </div>
                    <div className="author__description">
                      <p className="coustard">Jim Silvy</p>
                      <p>Freelance Digital Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div style={styles.sliderContainer}>
              <div className="quote-wrapper">
                <img alt="quote-marks" src={Quote} />
              </div>
              <p>I worked with Liz on a very challenging Wealth project during my time at Barclays. She always acted professionally and was able to produce high quality designs even with constantly changing requirements. I would recommend working with Liz and I would happily do so again.</p>
              <hr />

                <div className="author__wrapper">
                  <div className="author__content">
                    <div className="author__image">
                      <img alt="Michael Wallace" src={Michael} />
                    </div>
                    <div className="author__description">
                      <p className="coustard">Michael Wallace</p>
                      <p>Barclays Product Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div style={styles.sliderContainer}>
              <div className="quote-wrapper">
                <img alt="quote-marks" src={Quote} />
              </div>
              <p>Liz is extremely dedicated, passionate and takes great pride in her work. She is always full of new ideas and has a natural eye for detail when it comes to branding and web design. Working with Liz was an absolute pleasure, she's great fun to work alongside and I believe she would be an asset to any creative team.</p>
              <hr />

                <div className="author__wrapper">
                  <div className="author__content">
                    <div className="author__image">
                      <img alt="Mazz Napier" src={Mazz} />
                    </div>
                    <div className="author__description">
                      <p className="coustard">Mazz Napier</p>
                      <p>Eight Arms Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}
