import * as React from 'react';
import { ActionCreator } from '../../redux/reducer';
import {connect} from 'react-redux';
import './gamer-form.css';
import GamerFormInput from './gamer-form-input/gamer-form-input';
import { StandartTemplate } from '../../common/standartTemplate'

class GamerForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = StandartTemplate

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const area = event.target.name;
    const areaValue = event.target.value;

    if(area === 'name' || area === 'city' || areaValue.match(/^\d{0,}$/)){
      this.setState({[area]: areaValue})
    } 

  }

  render() {

    const userData = this.state;
    const {
      setUser,
      gamers,
      gamersCount,
      showResult,
      startEnterPoints
    } = this.props;

    const processUserData = () => {
      
      let resultKeys = Object.keys(this.state).filter(item => item !== 'name' & item !== 'city')
      let resultPoints = 0;
      resultKeys.map(item => { return resultPoints = resultPoints + +this.state[item] });
      
      userData.resultPoints = resultPoints;
      
      setUser(userData);

      this.setState(StandartTemplate)
      // delete this.state.resultPoints

      if(gamers.length === +gamersCount){
        showResult(true);
        startEnterPoints(false)
      }
    }
  
    return <div className="form-wrapper">
      <h2 className="form-title"> Gamer </h2>
      <div className="form-inputs">
        {Object.keys(this.state).map((item ,index) => {
          let itemValue = this.state[item];

          return  <GamerFormInput
                    key={index}
                    item={item}
                    itemValue={itemValue}
                    handleChange={this.handleChange}
                  />
        })}
      </div>

      <button onClick={() => processUserData()}>Сохранить</button>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  gamers: state.gamers,
  gamersCount: state.gamersCount
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (userData) => {
    dispatch(ActionCreator.setUser(userData))
  },

  showResult: (value) => {
    dispatch(ActionCreator.showResult(value))
  },

  startEnterPoints: (value) => {
    dispatch(ActionCreator.startEnterPoints(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GamerForm);