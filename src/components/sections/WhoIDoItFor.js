import React from 'react';
import Pwc from '../../assets/images/pwc.svg';
import Barclays from '../../assets/images/barclays.svg';
import Nesta from '../../assets/images/nesta.svg';
import LoveCrafts from '../../assets/images/love-crafts.svg';
import Equiniti from '../../assets/images/equiniti.svg';
import Fairtrade from '../../assets/images/fairtrade.svg';
import Trx from '../../assets/images/trx.svg';
import Gps from '../../assets/images/gps.svg';

export default class WhoIDoItFor extends React.Component {

  render() {

    const skills = [
      {id: 1, name: 'PWC', src: Pwc},
      {id: 2, name: 'Barclays', src: Barclays},
      {id: 3, name: 'Nesta', src: Nesta},
      {id: 4, name: 'Love crafts', src: LoveCrafts},
      {id: 5, name: 'Equiniti', src: Equiniti},
      {id: 6, name: 'Fairtrade', src: Fairtrade},
      {id: 7, name: 'TRX', src: Trx},
      {id: 8, name: 'GPS', src: Gps},
      
    ];

    const clients = skills.map((item, index) => {
      return (
        <li key={index}>
          <img alt={item.name} src={item.src} />
        </li>
      )
    });

    return (
      <section name="#whoIDoItFor" id="whoIDoItFor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <span className="sub-title sub-title--pink">Who I do it for</span>
              <h2>I've worked with a variety of clients.</h2>
            </div>
            <div className="col-lg-6">
              <p>Over the last 6 years I have worked with small start-ups, large corporate clients and nearly everyone in between.</p>
              <ul className="client-image-list">
                {clients}
              </ul>
            </div>
          </div>
        </div>  
      </section>
    )
  }
}
