import * as React from 'react';
import {connect} from 'react-redux';
import './result-table.css';

class ResultTable extends React.Component {
  constructor (props) {
    super (props);
    this.state = {}
  }

  render () {
    const {gamers} = this.props;

    return <div className="result-table">
    <h2>Результаты</h2>

    {gamers.map((gamer, index ) => {

      return  <div 
                key={index}
                isOpen = {this.state[index]}
                onClick={() => {this.setState({[index]: !this.state[index]}) }}
                className={`gamer-wrapper ${this.state[index] !== true ? '' : 'active'}`}
              >

                <div className="gamer-main-row">
                  <span>{gamer.name}</span>
                  <span>{gamer.city}</span>
                  <span>{gamer.result}</span>
                </div>

                <div
                  className="gamer-more-details"
                >
                  <div className="more-details-row">
                    <span>Война:</span>
                    <span>{gamer.war}</span>
                  </div>

                  <div className="more-details-row">
                    <span>Монеты:</span>
                    <span>{gamer.money}</span>
                  </div>

                  <div className="more-details-row">
                    <span>Чудеса:</span>
                    <span>{gamer.wonders}</span>
                  </div>

                  <div className="more-details-row">
                    <span>Синие карты:</span>
                    <span>{gamer.blueCards}</span>
                  </div>

                  <div className="more-details-row">
                    <span>Зелёные карты:</span>
                    <span>{gamer.greenCards}</span>
                  </div>

                  <div className="more-details-row">
                    <span>Золотые карты:</span>
                    <span>{gamer.goldCards}</span>
                  </div>

                  <div className="more-details-row">
                    <span>Фиолетовые карты:</span>
                    <span>{gamer.purpleCards}</span>
                  </div>
                </div>
                
              </div>
    })}
  </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  gamers: state.gamers
});

export default connect(mapStateToProps)(ResultTable);