const { Command } = require('commander');

const currencyController = new Command('currency');

async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const appId = '3725fc16881d410db22a3b1049cb7552'; // Directly use your API key here
        const exchangeRates = new ExchangeRates(appId);
        const rates = await exchangeRates.getLatestExchangeRates();
        const fromRate = rates[fromCurrency];
        const toRate = rates[toCurrency];
        const convertedAmount = (amount / fromRate) * toRate;
        console.log(`${amount} ${fromCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } catch (error) {
        console.error(error.message);
    }
}

currencyController
    .command('convert <amount> <fromCurrency> <toCurrency>')
    .description('Convert currency from one to another')
    .action((amount, fromCurrency, toCurrency) => {
        convertCurrency(parseFloat(amount), fromCurrency.toUpperCase(), toCurrency.toUpperCase());
    });

// Export the currencyController if needed
module.exports = currencyController;