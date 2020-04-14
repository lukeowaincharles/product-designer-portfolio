import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GPSIMAGE from "../../assets/images/gps-project.svg";
import HUMNIMAGE from "../../assets/images/humn-project.svg";
import TRXIMAGE from "../../assets/images/trx-project.svg";

function RecentProjects() {
  let settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const styles = {
    section: {
      backgroundColor: "#FFEBF0",
    },
    sliderContainer: {
      backgroundColor: "#FFF",
      padding: "16px",
    },
  };

  const projects = [
    {
      title: "TRX",
      text:
        "A TV Rights Exchange Platform, bringing buyers and sellers together like never before.",
      image: TRXIMAGE,
    },
    {
      title: "Humn",
      text:
        "Driving insurance into the future by resetting insurance for ride-hailing drivers and fleets.",
      image: HUMNIMAGE,
    },
    {
      title: "GPS",
      text:
        "Brining clarity to finances within estates to create organisation and peace of mind.",
      image: GPSIMAGE,
    },
  ];

  const projectSlide = projects.map((item, index) => {
    return (
      <div key={index}>
        <div className="recent-projects__card" style={styles.sliderContainer}>
          <img src={item.image} alt="" />
          <p className="coustard">{item.title}</p>
          <p>{item.text}</p>
        </div>
      </div>
    );
  });

  return (
    <section
      className="recent-projects"
      style={styles.section}
      name="#recentProjects"
      id="recentProjects"
    >
      <div className="container">
        <span className="sub-title">Recent Projects</span>
        <Slider {...settings}>{projectSlide}</Slider>
      </div>
    </section>
  );
}

export default RecentProjects;
