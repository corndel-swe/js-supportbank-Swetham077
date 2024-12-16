class InvestmentCalculator {
    calculateSimpleInterest(principal, rate, time) {
        return principal + (principal * rate * time) / 100;
    }

    calculateCompoundInterest(principal, rate, time, n = 1) {
        return principal * Math.pow((1 + (rate / (n * 100))), n * time);
    }
}

export default InvestmentCalculator;