import React from 'react';

export default class WhoIAm extends React.Component {

  render() {

    const articles = [
      {id: 1, description: 'So you’ve lost your design mojo? Well here’s how to get it back!', link: 'https://medium.com/inktrap/so-youve-lost-your-design-mojo-well-here-s-how-to-get-it-back-fad71121681'},
      {id: 2, description: 'Designers — No one cares about the design like you do.', link: 'https://medium.com/what-liz-learnt/what-i-learnt-this-week-designers-no-one-cares-about-the-design-like-you-do-33caddc8fb03'},
      {id: 3, description: 'Organising and facilitating a client workshop.', link: 'https://medium.com/what-liz-learnt/what-i-learnt-this-week-organising-and-facilitating-user-testing-f6cee737ce85'},
    ];

    const articleList = articles.map((item, index) => {
      return (
        <div className="article-teaser" key={index}>
          <p className="text-size-20">{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">Read article</a>
        </div>
      )
    });

    return (
      <section name="#whoIAm" id="whoIAm">
        <div className="container">
          <span className="sub-title sub-title--pink">Who I am</span>
          <h2>Want to know more?</h2>
          
          <p>Formally trained as a Graphic Designer, I switched to web design in 2015. After having tonnes of fun designing marketing and portfolio sites, I landed my first role working as a Digital Product Designer for Barclays through We Are Why. Since then I have never looked back and have gone on to work with companies mainly in the Finance and Legal sector.
          <br />
          <br />
          Supporting others incredibly important to me. For this reason I’ve recently joint the <a href="https://www.triangirls.com/" target="_blank" rel="noopener noreferrer">Triangirls</a> team to help organise events and workshops to help women in tech.
          <br />
          <br />
          I'm a keen writer about Design, but I also write about Leadership and Self Improvement. I'm currently featured as one of <a href="https://medium.com/tag/design/top-writers" target="_blank" rel="noopener noreferrer">Mediums Top 50 Writers in Design</a>.
          </p>
          <span className="sub-title">Articles</span>
          {articleList}

          <p>You can find me writing on <a href="https://twitter.com/LizHamburger" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://www.linkedin.com/in/elizabeth-hamburger/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. But if you're of the visual nature, you can see some of my previous work pre Product Design on <a href="https://dribbble.com/LizHamburger" target="_blank" rel="noopener noreferrer">Dribbble</a>.</p>
        </div>  
      </section>
    )
  }
}
