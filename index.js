#!/usr/bin/env node

'use strict';

const CommandLineInterface = require('cmnd').CommandLineInterface;
const CLI = new CommandLineInterface();
const globalHelp = require('./utils/globalHelp');

CLI.load(__dirname, './commands');
try{
	CLI.run(process.argv.slice(2));
} catch(e) {
	if (e.message === "Cannot read property 'split' of undefined") {
		console.log(globalHelp());
	} else {
		console.error(e);
	}
}
