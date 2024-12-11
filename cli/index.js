import { Command } from 'commander';
import billController from './cli.js';

const program = new Command();

program
    .name('cli')
    .description('A CLI for splitting bills')
    .version('1.0.0');

program.addCommand(billController);

program.parse(process.argv);