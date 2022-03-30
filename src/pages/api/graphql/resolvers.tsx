import Nomics from 'nomics';

const nomics = new Nomics({
    apiKey: process.env.API_KEY!
});

const resolvers = {
    Query: {
        getCoins: async function (_, args) {
		    // fetches all coins from nomics
		    const coins = await nomics.currenciesTicker();

		    // let's only return the top 30
		    return coins.slice(0, 30);
	    },

        getCoinDetails: async (_, args) => {
            const { coinId, interval } = args;

            // fetch coin from nomics for specified interval
            const fetchCoinDetails = await nomics.currenciesTicker({
                ids: [`${coinId}`.toUpperCase()],
                interval: [`${interval}`]
            });

            return fetchCoinDetails[0][`${interval}`];
        },

        getCoin: async (_, args) => {
            const { coinId, interval } = args;

            // Default interval is set to 1 day
            const fetchCoinDetails = await nomics.currenciesTicker({
                ids: [`${coinId}`.toUpperCase()]
            });

            return fetchCoinDetails[0];
        }
    }
};

export default resolvers;