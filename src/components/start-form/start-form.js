import * as React from 'react';
import {useState} from 'react';
import { ActionCreator } from '../../redux/reducer';
import {connect} from 'react-redux';
import './start-form.css';

const StartForm = ({setUserCount}) => {
  const [inputValue, setInputValue] = useState('')

  const setValue = (event) => {
    setInputValue(event.target.value)
  }

  return <> 
    <div className="input-wrapper">
      <input 
        type="text"
        placeholder="Number of players"
        value={inputValue}
        onChange={setValue} 
        className="default-input"
      />
      <button
        onClick={() => setUserCount(inputValue)}
        className="default-button"
      >
        Start
      </button>
    </div>  
  </>

}

const mapStateToProps = (state, ownProps) => ({...ownProps})

const mapDispatchToProps = (dispatch) => ({
  setUserCount: (count) => {
    dispatch(ActionCreator.setUserCount(count));
    dispatch(ActionCreator.startEnterPoints(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);