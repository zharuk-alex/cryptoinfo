// import serialize from './serialize'

export const getCurrenciesList = () => {
  return fetch(`https://api.coinmarketcap.com/v2/listings/`)
  .then(response => response.json())
}

export const getCoinData = (coinsymbol) => fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coinsymbol}&tsyms=BTC,USD,EUR`)
  .then(response => response.json())
