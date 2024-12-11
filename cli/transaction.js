import { Command } from 'commander';

const transactionController = new Command('transaction');

function logTransaction(from, to, amount) {
  const date = new Date();
  const formattedDate = date.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  console.log(`At ${formattedDate}, ${from} sent ${to} £${amount}`);
}

// Register the log command
transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action(logTransaction);

export default transactionController;