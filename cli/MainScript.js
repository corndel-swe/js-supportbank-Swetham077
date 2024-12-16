import fs from 'fs';
import Transaction from './Transaction.js';
import Account from './AccountName.js';
import { Command } from 'commander';
import transactionController from './transaction.js';

const transactions = [];
const accounts = {};

fs.readFile('data/Transactions2014.csv', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.split('\n');
  const dataLines = lines.slice(1);

  // Process each line
  dataLines.forEach((line) => {
    if (line.trim()) { // Check if the line is not empty
      const [date, from, to, narrative, amount] = line.split(',');

      // Create a new Transaction instance
      const transaction = new Transaction(date, from, to, narrative, parseFloat(amount));
      transactions.push(transaction);

      // Ensure accounts exist for both the 'from' and 'to' parties
      if (!accounts[from]) {
        accounts[from] = new Account(from);
      }
      if (!accounts[to]) {
        accounts[to] = new Account(to);
      }

      // Add the transaction to the relevant accounts
      accounts[from].addTransaction(transaction);
      accounts[to].addTransaction(transaction);
    }
  });

  console.log('CSV file successfully processed');
});

const program = new Command();

transactionController
  .command('summarise all')
  .description('Summarise all accounts')
  .action(() => {
    for (const accountName in accounts) {
      console.log(`${accountName}: ${accounts[accountName].balance}`);
    }
  });

accountNameController
  .command('list <accountName>')
  .description('List transactions for an account')
  .action((accountName) => {
    if (accounts[accountName]) {
      accounts[accountName].transactions.forEach((transaction) => {
        console.log(`${transaction.date}: ${transaction.narrative}`);
      });
    } else {
      console.log(`Account ${accountName} not found.`);
    }
  });

  program.addCommand(transactionController);
  program.addCommand(accountNameController)

program.parse(process.argv);