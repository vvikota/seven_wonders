import * as React from 'react';
import './gamer-card.css';
import { CamelCaseRefactor } from '../../../common/camelCaseRefactor';

const GamerCard = (props) => {
  const { gamer, index, setActiveTab, activeTabs } = props;

  let resultKeys = Object.keys(gamer).filter(item => item !== 'name' & item !== 'city' & item !== 'resultPoints' )

  return  <div 
            onClick={() => {setActiveTab(index)}}
            className={`gamer-wrapper ${activeTabs[index] !== true ? '' : 'active'}`}
          >

            <div className="gamer-main-row">
              <span>{gamer.name}</span>
              <span className="gamer-points">
                {gamer.resultPoints}
                <span className="gamer-city">{gamer.city}</span>
              </span>
            </div>

              <div className="gamer-more-details">
                {
                  resultKeys.map((item, index) =>
                      <div className="more-details-row" key={index}>
                        <span>{CamelCaseRefactor(item)}:</span>
                        <span>{gamer[item]}</span>
                      </div>
                  )
                }
              </div>
          </div>
}

export default GamerCard;
