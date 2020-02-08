import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HowIDidIt extends React.Component {

  render() {

    let settings = {
      arrows: true,
      dots: true,
      infinite: false,
      speed: 500,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false
          }
        }
      ]
    };

    const styles = {
      section: {
        backgroundColor: '#F8F8F8',
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
      },
      width290: {
        width: '290px'
      }
    }

    return (
      <section style={styles.section} name="#howIDoIt" id="howIDoIt">
        <div className="container">
          <span className="sub-title sub-title--pink">How I do it</span>
          <Slider {...settings}>
            <div>
              <div style={styles.sliderContainer} className="desktop-height__434">
                <div className="row">
                  <div className="col-lg-4">
                    <p>01.</p>
                    <div style={styles.titleContainer}>
                      <h2 style={styles.title}>Understand</h2>
                      <span style={styles.width290} className="highlight highlight--long" id="svgHighlight"></span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p>Communication and understanding are integral to my process. Not only do I want to understand the users, but most importantly I want to understand your business and where you want to go.
                    <br />
                    <br />
                    To gain understanding I work with clients in a variety of formats such as a week long sprint, individual workshops or I may run user research sessions depending on the problem at had.
                    <br />
                    <br />
                    By identifying opportunities this way, I'm able to understanding the implications of the business needs as well as the users needs, ultimately enabling me to create a holistic design solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={styles.sliderContainer} className="desktop-height__434">
                <div className="row">
                  <div className="col-lg-4">
                    <p>02.</p>
                    <div style={styles.titleContainer}>
                      <h2 style={styles.title}>Collaborate
                      </h2>
                      <span style={styles.width290} className="highlight highlight--long" id="svgHighlight2"></span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p>I believe that everyone can have brilliant ideas and you don't have to be a designer to suggest a great solution.
                    <br />
                    <br />
                    This principle means that I enjoy working collaboratively with my clients and team to help facilitate idea generation but also to keep communication open as possible.
                    <br />
                    <br />
                    By co-creating so closely with clients, we're able to draw on everyones experience and talents to build a solution that everyone, especially the user is happy with.
                    <br />
                    <br />
                    Once opportunities have been established and a direction set I get to work on generating wireframes and prototypes quickly so that we can test and improve solutions.</p>
                  </div>  
                </div>
              </div>
            </div>
            <div>
              <div style={styles.sliderContainer} className="desktop-height__434">
                <div className="row">
                  <div className="col-lg-4">
                    <p>03.</p>
                    <div style={styles.titleContainer}>
                      <h2 style={styles.title}>Refine</h2>
                      <span style={styles.width290} className="highlight highlight--small" id="svgHighlight3"></span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p>The beauty of Digital Design is that it is never done.
                    <br />
                    <br />
                    The most exciting time of a Digital Products life cycle is when it launched. But before that testing is critical before releasing it into the wild. During the testing stage I work with the client to establish what metrics we're testing, and what we're really trying to find out during our test.
                    <br />
                    <br />
                    This may be my favourite part, talking with users, gaining real insights into their thoughts and feelings about the product we've created and how we can make further improvements.</p>
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
