import React, { Component } from 'react';
import SearchCoins from './SearchCoins/SearchCoins';
import CurrList from './CurrList/CurrList';
import Ticker from './Ticker/Ticker';

import { Button, Row } from 'reactstrap';

import './App.css';
import '../node_modules/cryptocoins-icons/webfont/cryptocoins.css'
import '../node_modules/cryptocoins-icons/webfont/cryptocoins-colors.css'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCoin: [],
      coinsListCount: 10,
      coinsList:[]
    };
  }

  selectCoinHandler = currency => event => {
    this.setState(({ selectedCoin }) => {
      let coins = [...selectedCoin];
      (coins.includes(currency)) ? coins = coins.filter(coin => coin !== currency) : coins.push(currency)
      return {
        selectedCoin: coins
      }
    })
  }


  loadMore = (event) => {
    this.setState({
      coinsListStart: this.state.coinsListStart+this.state.coinsListCount
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <aside>
            <SearchCoins/>
            <CurrList
              selected={this.state.selectedCoin}
              coinsList={this.state.coinsList}
              coinsListCount={this.state.coinsListCount}
              selectCoinHandler={this.selectCoinHandler} />
            <Button color="info" onClick = { this.loadMore }>Show More</Button>
          </aside>

          <main className="container-fluid">
            <Row>
              {this.state.selectedCoin.map(coin =>
                <Ticker
                  key={coin.id}
                  coin={coin}
                  isActive={this.state.selectedCoin.includes(coin)}
                  selectCoinHandler={this.selectCoinHandler} />
              )}
            </Row>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
