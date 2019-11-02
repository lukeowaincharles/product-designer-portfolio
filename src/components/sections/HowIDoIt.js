import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HowIDidIt extends React.Component {

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
        backgroundColor: '#F8F8F8',
        padding: '20px 0 70px',
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
      <section style={styles.section} name="#howIDoIt" id="howIDoIt">
        <div className="container">
          <span className="sub-title sub-title--pink">How I do it</span>
          <Slider {...settings}>
            <div>
              <div style={styles.sliderContainer}>
                <p>01.</p>
                <div style={styles.titleContainer}>
                  <h2 style={styles.title}>Understand</h2>
                  <span className="highlight highlight--long"></span>
                </div>
                <p>Communication and understanding are integral to my process. Not only do I want to understand the users, but most importantly I want to understand your business and where you want to go.
                <br />
                <br />
                To gain understanding I work with clients in a variety of formats such as a week long sprint, individual workshops or I may run user research sessions depending on the problem at had.
                <br />
                <br />
                By identifying opportunities this way, I'm able to understanding the implications of the business needs as well as the users needs, ultimately enabling me to create a holistic as well as realistic design solution.</p>
              </div>
            </div>
            <div>
              <div style={styles.sliderContainer}>
                <p>02.</p>
                <div style={styles.titleContainer}>
                  <h2 style={styles.title}>Collaborate
                  </h2>
                  <span className="highlight highlight--long"></span>
                </div>
                <p>I believe that everyone can have brilliant ideas and you don't have to be a designer to suggest a great solution.
                <br />
                <br />
                This principle means that I enjoy working collaboratively my clients and my team to help facilitate idea generation but also to keep communication open as possible.
                <br />
                <br />
                By co-creating so closely with clients, as a group we're able to draw on everyones experience and talents to build a solution that everyone, especially the user is happy with.
                <br />
                <br />
                Once opportunities have been established and a direction set I get to work on generating wireframes and prototypes quickly as possible so that we can test and improve solutions.</p>
              </div>
            </div>
            <div>
              <div style={styles.sliderContainer}>
                <p>03.</p>
                <div style={styles.titleContainer}>
                  <h2 style={styles.title}>Refine</h2>
                  <span className="highlight highlight--small"></span>
                </div>
                <p>The beauty of Digital Design is that it is never done.
                <br />
                <br />
                The most exciting time of a Digital Products life cycle is when it launched, at this stage is when I again work with the client to establish what we want to find out during the user testing phase.
                <br />
                <br />
                This may be my favourite part, talking with users, gaining real insights into their thoughts and feelings about the product or service we've created and how we can make further improvements.</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}