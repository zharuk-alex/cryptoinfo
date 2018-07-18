import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getCurrenciesList } from '../getCurrenciesData';

import { CheckedIcon } from '../IconsSVG';


import './CurrList.css';

class CurrList extends Component {
	state = {
		coinsList: [],
	};
	componentDidMount() {
    getCurrenciesList().then(res =>{
			console.log(res);
      this.setState({
        coinsList:Object.keys(res.data).map((k) => res.data[k]),
        isActive:[]
      })
    })
  }

  render() {

    const {coinsList} = this.state;
		const {coinsListCount, selectCoinHandler, selected} = this.props;
    return (
			<ListGroup className="currList">
			{coinsList.map((coin,ind) => (
				(ind < coinsListCount)?
					<ListGroupItem
						action
						key={coin.id}
						onClick={selectCoinHandler(coin)}
						className="clearfix" >
						<i className={`cc ${coin.symbol} float-left`}></i>
						<span>{coin.name}</span>
						{selected.includes(coin) ? <span className="float-right">{CheckedIcon}</span>:false}
					</ListGroupItem> : false
			))}
      </ListGroup>
    )
  }
}

export default CurrList;
