import fs from 'fs'
import Transaction from'./Transaction.js';
import Account from './AccountName.js'
import { Command } from 'commander';

const transactions =[];
const accounts = [];

fs.readFile('data/Transactions2014.csv', 'utf-8')

const lines = data.split('\n');
const dataLines = lines.slice(1);

  // Process each line
  dataLines.forEach((line) => {
    if (line.trim()) { // Check if the line is not empty
      const [date, from, to, narrative, amount] = line.split(',');

      // Create a new Transaction instance
      const transaction = new transaction(date, from, to, narrative, amount);
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

  const program = new Command();

  program
    .command('summarise all')
    .description('summarise all accounts')
    .action (() => {
        for (const AccountName in accounts) {
            console.log(`${AccountName}: ${accounts[AccountName].balance}`);
        }
    })

program
    .command('list <accountName')
    .description('List transactions for an account')
    .action((accountName) => {
        accounts[accountName].transactions.forEach((transaction) =>{
            console.log(`${transaction.date}: ${transaction.narrative}`);
        });
    
    })
program.parse(process.argv);