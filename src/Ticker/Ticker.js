import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap';
import { CloseIcon } from '../IconsSVG';
import { getCoinData } from '../getCurrenciesData';
import "./Ticker.css";

class Ticker extends Component {
  state = {
    value: 0,
    isLoaded: false
  }

  updateExchangeRate = () => {
    const { symbol } = this.props.coin;
    return getCoinData(symbol)
      .then( res => {
        console.log(res);
        this.setState({
          isLoaded: true,
          value:res
        })
      });
  }

  componentDidMount() {
    this.updateExchangeRate();
    this.interval = setInterval(this.updateExchangeRate, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render(){
    const {coin, selectCoinHandler} = this.props;

    return(
      <Col md="4">
        <Card className="ticker" body>
          <CardTitle>
            {coin.name}
            <span className="float-right" onClick={selectCoinHandler(coin)}>{CloseIcon}</span>
          </CardTitle>
          <ul className="coin-cost">
          {(this.state.isLoaded) ? Object.keys(this.state.value).map((item, i) => (
            <li key={i}>
              {`${item} : ${this.state.value[item].toString()}`}
            </li>)
          ) : false}
          </ul>
        </Card>
      </Col>
    )
  }
}
export default Ticker;
