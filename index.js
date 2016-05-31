#!/usr/bin/env node

'use strict';

const CLI = new (require('termos')).CLI();
const globalHelp = require('./utils/globalHelp');

CLI.load(__dirname, './commands');
CLI.run(process.argv.slice(2));
