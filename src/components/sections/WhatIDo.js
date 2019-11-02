import React from 'react';

export default class WhatIDo extends React.Component {

  render() {

    const skills = [
      {id: 1, name: 'Idea Workshops'},
      {id: 2, name: 'Design Sprints'},
      {id: 3, name: 'User Research'},
      {id: 4, name: 'Ux Design'},
      {id: 5, name: 'Rapid Prototyping'},
      {id: 6, name: 'UI Design'},
      {id: 7, name: 'Mentoring'},
      {id: 8, name: 'Design Leadership'},
    ];

    const styles = {
      listItem: {
        display: 'inline-block',
        width: '50%',
      }
    }

    const skillItems = skills.map((item, index) => {
      return (
        <li className="list-item" key={index} style={styles.listItem}>
          {item.name}
        </li>
      )
    });

    return (
      <section name="#whatIDo" id="whatIDo">
        <div className="container">
          <span className="sub-title sub-title--pink">What I do</span>
          <h2>Making products and services better for everyone.</h2>
          <p>Whether that's a client looking to improve their already existing user experience or helping a user live better day to day when using technology.
          <br />
          <br />
          Creating meaningful experiences is at the core of what I do and my love for helping people doesn't stop there. I am passionate in helping other designers find their own way in their career and having their voices heard.
          </p>
          <p>Skills</p>
          <ul>
            {skillItems}
          </ul>
        </div>  
      </section>
    )
  }
}
