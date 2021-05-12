import * as React from 'react';
import { ActionCreator } from '../../redux/reducer';
import {connect} from 'react-redux';
import './gamer-form.css';

class GamerForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      city: '',
      war: 0,
      money: 0,
      wonders: 0,
      blueCards: 0,
      greenCards: 0,
      goldCards: 0,
      purpleCards: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const area = event.target.name;
    this.setState({[area]: event.target.value})
  }

  render() {
    const {
      name,
      city,
      war,
      money,
      wonders,
      blueCards,
      greenCards,
      goldCards,
      purpleCards
    } = this.state;
    const userData = this.state;
    const {setUser, gamers, gamersCount, showResult, startEnterPoints} = this.props;

    const processUserData = () => {
      setUser(userData);
      
      this.setState({
        name: '',
        city: '',
        war: 0,
        money: 0,
        wonders: 0,
        blueCards: 0,
        greenCards: 0,
        goldCards: 0,
        purpleCards: 0
      })

      console.log(gamers.length, gamersCount)
      
      if(gamers.length === +gamersCount){
        showResult(true);
        startEnterPoints(false)
      }
    }
  
    return <div className="form-wrapper">
      <label>
        Имя игрока
        <input 
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Город игрока
        <input 
          type="text"
          name="city"
          value={city}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки войны
        <input 
          type="text"
          name="war"
          value={war}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки за монеты
        <input 
          type="text"
          name="money"
          value={money}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки за чудеса
        <input 
          type="text"
          name="wonders"
          value={wonders}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки за синие карты
        <input 
          type="text"
          name="blueCards"
          value={blueCards}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки за зеленые карты
        <input 
          type="text"
          name="greenCards"
          value={greenCards}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки за золотые карты
        <input 
          type="text"
          name="goldCards"
          value={goldCards}
          onChange={this.handleChange} 
        />
      </label>  

      <label>
        Очки за фиолетовые карты
        <input 
          type="text"
          name="purpleCards"
          value={purpleCards}
          onChange={this.handleChange} 
        />
      </label>

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