import React from 'react';
import Slider from 'react-slick';
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
                <img alt="quote-marks" src="" />
                <p>Liz is an exceptional designer and someone whom I learnt a lot from. She has the ability to breakdown problems and project briefs in complex industries such as Fintech and form effective ideas accordingly. Her work is always underpinned by a clear and intuitive process and invaluable experience.</p>

                <div className="author__wrapper">
                  <div className="author">
                    <img alt="" src="" />
                    <p>Jim Silvy</p>
                    <p>Freelance Digital Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div style={styles.sliderContainer}>
              <img alt="quote-marks" src="" />
              <p>I worked with Liz on a very challenging Wealth project during my time at Barclays. She always acted professionally and was able to produce high quality designs even with constantly changing requirements. I would recommend working with Liz and I would happily do so again.</p>

                <div className="author__wrapper">
                  <div className="author">
                    <img alt="" src="" />
                    <p>Michael Wallace</p>
                    <p>Barclays Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div style={styles.sliderContainer}>
              <img alt="quote-marks" src="" />
              <p>Liz is extremely dedicated, passionate and takes great pride in her work. She is always full of new ideas and has a natural eye for detail when it comes to branding and web design. Working with Liz was an absolute pleasure, she's great fun to work alongside and I believe she would be an asset to any creative team.</p>

                <div className="author__wrapper">
                  <div className="author">
                    <img alt="" src="" />
                    <p>Mazz Napier</p>
                    <p>Eight Arms Project Manager</p>
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
