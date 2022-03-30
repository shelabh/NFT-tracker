import gql from 'graphql-tag'

export const GET_COINS_QUERY = gql`
  {
    getCoins {
      id
      currency
      name
      logo_url
      rank
      price
      price_date
      market_cap
      circulating_supply
      max_supply
    }
  }
`;

export const GET_COIN_DETAILS = gql`
  query getCoinDetails($coinId: String!, $interval: String!) {
    getCoinDetails(coinId: $coinId, interval: $interval) {
      volume
      price_change
      price_change_pct
      volume_change
      volume_change_pct
      market_cap_change
      market_cap_change_pct
    }
  }
`;

export const GET_COIN_QUERY = gql`
    query getCoin($coinId: String!) {
        getCoin(coinId: $coinId) {
            id
            currency
            name
            logo_url
            rank
            price
            price_date
            market_cap
            circulating_supply
            max_supply
        }
    }
`;