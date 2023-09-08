import React from "react";
import LizPortrait from '../../assets/images/liz-portrait.png';
import GolfBadge from '../../assets/images/golfer-badge.svg';
import SeniorBadge from '../../assets/images/senior-badge.svg';
import MotorcycleBadge from '../../assets/images/motorcycle-badge.svg';
import ProductBage from '../../assets/images/product-badge.svg';

function Portrait() {
  const badges = [
    { id: 0, name: 'golf', src: GolfBadge },
    { id: 1, name: 'senior', src: SeniorBadge },
    { id: 2, name: 'motorcycle', src: MotorcycleBadge },
    { id: 3, name: 'product', src: ProductBage },
  ]

  return (
    <section>
      <ul className="badges-list">
        {badges.map((item, index) => (
          <li key={index} className={`${"badges-list__item"} ${item.name}`}>
            <img src={item.src} alt={`${item.name + " badge"}`} />
          </li>
        ))}
      </ul>
      <img src={LizPortrait} alt="Liz Hamburger portrait smiling" />
    </section>
  );
}

export default Portrait;
