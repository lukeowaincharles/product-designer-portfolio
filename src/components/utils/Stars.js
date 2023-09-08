import React from 'react';
import Star from "../../assets/images/star.svg";

function Stars() {
  const stars = [
    { id: 0, name: 'star', src: Star},
    { id: 1, name: 'star', src: Star},
    { id: 2, name: 'star', src: Star},
    { id: 3, name: 'star', src: Star},
    { id: 4, name: 'star', src: Star},
    { id: 5, name: 'star', src: Star},
    { id: 6, name: 'star', src: Star},
    { id: 7, name: 'star', src: Star},
    { id: 8, name: 'star', src: Star},
    { id: 9, name: 'star', src: Star},
  ]

  return (
    <div className='star-wrapper'>
      {stars.map((item, index) => (
        <div key={index} className={`${item.name} ${item.name}${"--"}${item.id}`}>
          <img src={item.src} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Stars;