const globalHelp = require('../utils/globalHelp');

module.exports = (() => {

	'use strict';

	const Command = require('cmnd').Command;

	class HelpCommand extends Command {

		constructor() {

			super('help');

		}

		help() {

			return {};

		}

		run(args, flags, vflags, callback) {

			return callback(null, globalHelp());

		}

	}

	return HelpCommand;

})();
