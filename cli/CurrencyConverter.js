class CurrencyConverter {
    constructor() {
        this.exchangeRates = {
            USD: { GBP: 0.75, EUR: 0.85 },
            GBP: { USD: 1.33, EUR: 1.13 },
            EUR: { USD: 1.18, GBP: 0.88 }
        };
    }

    convert(amount, fromCurrency, toCurrency) {
        if (!this.exchangeRates[fromCurrency] || !this.exchangeRates[fromCurrency][toCurrency]) {
            throw new Error(`Conversion rate from ${fromCurrency} to ${toCurrency} not available.`);
        }
        return amount * this.exchangeRates[fromCurrency][toCurrency];
    }
}

export default CurrencyConverter;