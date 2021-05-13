import * as React from 'react';
import './gamer-card.css';

const GamerCard = (props) => {
  const { gamer, index, setActiveTab, activeTabs } = props

  return  <div 
            key={index}
            onClick={() => {setActiveTab(index)}}
            className={`gamer-wrapper ${activeTabs[index] !== true ? '' : 'active'}`}
          >

            <div className="gamer-main-row">
              <span>{gamer.name}</span>
              <span className="gamer-points">
                {gamer.result}
                <span className="gamer-city">{gamer.city}</span>
              </span>
            </div>

              <div
                className="gamer-more-details"
              >

                {gamer.categoryList.map((category, index) => {
                  return  <div className="more-details-row" key={index}>
                            <span>{category.categoryName}:</span>
                            <span>{category.points}</span>
                          </div>
                })}
              </div>
          </div>
}

export default GamerCard;