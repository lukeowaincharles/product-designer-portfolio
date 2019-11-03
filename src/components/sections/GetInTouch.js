import React from 'react';

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
      }
    }

    return (
      <section style={styles.section} name="#getInTouch" id="getInTouch">
        <div className="container">
          <span className="sub-title">Get in touch</span>
          <h2>Let's talk</h2>
          
          <div className="content-wrapper content-wrapper--white">
            <p>I love talking as much as I do writing, so don’t hesitate to get in touch.
            <br />
            <br />
            I’m open to new opportunities espeicallty those that involve helping others. Also please get in touch if you want to partner on a Triangirls event.
            </p>
            <hr />
            <ul className="contact-list">
              {contactList}
            </ul>
          </div>

          <p className="sub-title sub-title--pink text-center"><a href="https://www.lukeowaincharles.co.uk/" target="_blank" rel="noopener noreferrer">Site built by Luke Charles</a></p>
        </div>  
      </section>
    )
  }
}
