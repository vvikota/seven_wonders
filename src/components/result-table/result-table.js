import * as React from 'react';
import {connect} from 'react-redux';
import './result-table.css';
import {useState} from 'react';
import GamerCard from './gamer-card/gamer-card'

const ResultTable = ({gamers}) => {

  gamers.sort((a, b) => b.resultPoints - a.resultPoints);
  
  const [activeTabs, setActive] = useState(new Array(gamers.length).fill(false))
    
  const setActiveTab = index => {
    const currentActiveTabs = [...activeTabs];
    currentActiveTabs[index] = !activeTabs[index]
    setActive(currentActiveTabs)
  }

  return <>
    <div className="result-table center-wrapper main-layer">
      <h2>Results</h2>

      {gamers.map((gamer, index) => <>
        <GamerCard
          key={index}
          gamer={gamer}
          index={index}
          setActiveTab={setActiveTab}
          activeTabs={activeTabs}
        />
      </>
      )}
    </div>
  </>
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  gamers: state.gamers
});

export default connect(mapStateToProps)(ResultTable);