import * as React from 'react';
import { ActionCreator } from '../../redux/reducer';
import {connect} from 'react-redux';
import './start-form.css';

class StartForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {setUserCount} = this.props;
    const {inputValue} = this.state;

    return <div className="input-wrapper">
          <input 
            type="text"
            placeholder="Количество игроков"
            value={inputValue}
            onChange={this.handleChange} 
          />
          <button onClick={() => setUserCount(inputValue)}>Начать</button>
        </div>      
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  gamerCountValue: state.gamersCountInputValue,
  isEnterPoints: state.isEnterPoints
});

const mapDispatchToProps = (dispatch) => ({
  setUserCount: (count) => {
    dispatch(ActionCreator.setUserCount(count));
    dispatch(ActionCreator.startEnterPoints(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);