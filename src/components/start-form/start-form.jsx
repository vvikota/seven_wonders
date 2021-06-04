import * as React from 'react';
import {useState} from 'react';
import { ActionCreator } from '../../redux/reducer';
import {connect} from 'react-redux';
import './start-form.css';

const StartForm = ({setUserCount, maxPlayers}) => {
  const [inputValue, setInputValue] = useState(2)

  const getOptions = () => {
    let content = []
    for (let i = 2; i < maxPlayers + 1; i++){
      content.push(<option key={i} value={i}>{i}</option>)
    }
    return content
  }

  return <> 
    <h2>Number of players</h2>
    <div className="input-wrapper">
      <select 
        onChange={(event) => setInputValue(event.target.value)}
        className="default-select"
      >
        {getOptions()}
      </select>

      <button
        onClick={() => setUserCount(inputValue)}
        className="default-button"
      >
        Start
      </button>
    </div>  
  </>

}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  maxPlayers: state.maxPlayers
})

const mapDispatchToProps = (dispatch) => ({
  setUserCount: (count) => {
    dispatch(ActionCreator.setUserCount(count));
    dispatch(ActionCreator.startEnterPoints(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);