import React from "react";
import Pwc from "../../assets/images/pwc.svg";
import Barclays from "../../assets/images/barclays.svg";
import Nesta from "../../assets/images/nesta.svg";
import Appsmith from "../../assets/images/appsmith.svg";
import Equiniti from "../../assets/images/equiniti.svg";
import Thriva from "../../assets/images/thriva.svg";
import Rideshur from "../../assets/images/rideshur.svg";
import Attest from "../../assets/images/attest.svg";

function Clients() {
  const skills = [
    { id: 1, name: "Barclays", src: Barclays },
    { id: 2, name: "Appsmith", src: Appsmith },
    { id: 3, name: "Thriva", src: Thriva },
    { id: 4, name: "PWC", src: Pwc },
    { id: 5, name: "Equiniti", src: Equiniti },
    { id: 6, name: "Nesta", src: Nesta },
    { id: 7, name: "Rideshur", src: Rideshur },
    { id: 8, name: "Attest", src: Attest },
  ];

  return (
    <section>
      <h2 className="text text--pink">Who I've worked with</h2>
      <ul className="client-image-list">
        {skills.map((item, index) => (
          <li
            className="client-image-list__item"
            key={index}
            id={`${"client__"}${item.name.toLowerCase()}`}
          >
            <img
              alt={`${"Logo of"} ${item.name}`}
              src={item.src}
              width="120"
              height="100%"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Clients;
