import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './../scss/App.scss';


const venues = [
  {
    title: "Ted's Collision",
    time: "Open",
    area: "Little Italy",
    description:"Laid-back watering hole with sports on TV, billiards &amp; a menu of internationally inspired fare."
  },
  {
    title: "The Dock Ellis",
    time: "Open",
    area: "Little Italy",
    description:"Laid-back watering hole with sports on TV, billiards &amp; a menu of internationally inspired fare."
  },
  {
    title: "Pour Boy",
    time: "Open",
    area: "Little Italy",
    description:"Laid-back watering hole with sports on TV, billiards &amp; a menu of internationally inspired fare."
  },
  {
    title: "Green Room",
    time: "Open",
    area: "Little Italy",
    description:"Laid-back watering hole with sports on TV, billiards &amp; a menu of internationally inspired fare."
  },
  {
    title: "Black Dice",
    time: "Open",
    area: "Little Italy",
    description:"Laid-back watering hole with sports on TV, billiards &amp; a menu of internationally inspired fare."
  }
]


class Votepanel extends Component {
  render() {
    
    const listItems = venues.map((d) => 
                           
       <li className='vote-panel' key={d.title}>
         <div className='d-f'>
         <div className='vote-panel__upvotes'></div>
          <div>
            <span className='vote-panel__area'>{d.area}</span>
            <span className='vote-panel__time'>{d.time}</span>
            <h1 className='vote-panel__title'>{d.title}</h1>
          </div>
        </div>
        <p className='vote-panel__description'>
        {d.description}</p>
      </li>
    );
    return (
     <div class='d-f'>
       <ul class='w-100'>
       {listItems}
       </ul>
     </div>
    );
  }
}

export default Votepanel;
