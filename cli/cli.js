import { Command } from 'commander';
import Bill from './Bill.js';
import CurrencyConverter from './CurrencyConverter.js';
import InvestmentCalculator from './InvestmentCalculator.js';
import SalaryCalculator from './TaxCalculator.js';

const program = new Command();

// Bill splitting functionality
const billController = new Command('bill');

function splitBill(total, people) {
    try {
        const bill = new Bill(total);
        const amountPerPerson = bill.split(people);
        console.log(`Each person owes £${amountPerPerson.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
    }
}

billController
    .command('split <total> <people>')
    .description('Split the bill among a number of people')
    .action((total, people) => {
        splitBill(parseFloat(total), parseInt(people));
    });

// Currency conversion functionality
const currencyController = new Command('currency');

function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const converter = new CurrencyConverter();
        const convertedAmount = converter.convert(amount, fromCurrency, toCurrency);
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

// Investment calculator functionality
const investmentController = new Command('invest');

function calculateSimpleInterest(principal, rate, time) {
    const calculator = new InvestmentCalculator();
    const amount = calculator.calculateSimpleInterest(principal, rate, time);
    console.log(`The projected value of the investment with simple interest is £${amount.toFixed(2)}`);
}

function calculateCompoundInterest(principal, rate, time) {
    const calculator = new InvestmentCalculator();
    const amount = calculator.calculateCompoundInterest(principal, rate, time);
    console.log(`The projected value of the investment with compound interest is £${amount.toFixed(2)}`);
}

investmentController
    .command('simple <principal> <rate> <time>')
    .description('Calculate the projected value of an investment with simple interest')
    .action((principal, rate, time) => {
        calculateSimpleInterest(parseFloat(principal), parseFloat(rate), parseInt(time));
    });

investmentController
    .command('compound <principal> <rate> <time>')
    .description('Calculate the projected value of an investment with compound interest')
    .action((principal, rate, time) => {
        calculateCompoundInterest(parseFloat(principal), parseFloat(rate), parseInt(time));
    });

    const salaryController = new Command('salary');

function calculateTax(salary) {
    const calculator = new SalaryCalculator();
    const netSalary = calculator.calculateNetSalary(salary);
    console.log(`The net salary after tax is £${netSalary.toFixed(2)}`);
}

salaryController
    .command('tax <salary>')
    .description('Calculate the net salary after tax')
    .action((salary) => {
        calculateTax(parseFloat(salary));
    });

// Add commands to the main program
program.addCommand(billController);
program.addCommand(currencyController);
program.addCommand(investmentController);
program.addCommand(salaryController)

program.parse(process.argv);