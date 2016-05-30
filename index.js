#!/usr/bin/env node

'use strict';

const CommandLineInterface = require('cmnd').CommandLineInterface;
const CLI = new CommandLineInterface();
const globalHelp = require('./utils/globalHelp');

CLI.load(__dirname, './commands');
CLI.run(process.argv.slice(2));
