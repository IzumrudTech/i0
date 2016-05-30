const createDir = require('../utils/createDir');
const colors = require('colors/safe');

module.exports = (() => {

  'use strict';

  const Command = require('termos').Command;

  class InitCommand extends Command {

    constructor() {

      super('init');

    }

    help() {

      return {
        description: 'An init command',
        args: ['init_arg1', 'init_arg2'],
        flags: {flag: 'An example flag'},
        vflags: {vflag: 'An example verbose flag'}
      };

    }

	createDirs(path, configNames, spaces) {
		if (!spaces) {
			spaces = '  ';
		}
		let customAsci = '├──';
		let configNamesLength = -1;
		if(configNames) {
			configNamesLength = configNames.length;
		}

		if (configNamesLength > 0) {
			customAsci = '├─┬';
		}

		createDir(
			path,
			'vendor',
			spaces + '├── ' + colors.yellow('vendor') + ' ' + colors.green('✔'),
			spaces + '├── ' + colors.yellow('vendor') + ' ' + colors.red('✖ (already created)'),
			spaces + '├── ' + colors.yellow('vendor') + ' ' + colors.red('✖ (can\'t contain slash)')
		);
		createDir(
			path,
			'custom',
			spaces + customAsci + ' ' + colors.yellow('custom') + ' ' + colors.green('✔'),
			spaces + customAsci + ' ' + colors.yellow('custom') + ' ' + colors.red('✖ (already created)'),
			spaces + customAsci + ' ' + colors.yellow('custom') + ' ' + colors.red('✖ (can\'t contain slash)')
		);

		let self = this;
		if (configNamesLength > 0) {
			configNames.map(function(configName, key) {
				let asci = '├─┬';
				let newSpaces = '  │ │ ';
				if (key === (configNamesLength - 1)) {
					asci = '└─┬';
					newSpaces =  '  │   ';
				}
				if (/\/+/.test(configName)) {
					asci = '├──';
					if (key === (configNamesLength - 1)) {
						asci = '└──';
					}
					console.log(spaces + '│ ' + asci + ' ' + colors.green(configName) + ' ' + colors.red('✖ (can\'t contain slash)'));
					return;
				}
				createDir(
					path + '/custom/',
					configName,
					spaces + '│ ' + asci + ' ' + colors.green(configName) + ' ' + colors.green('✔'),
					spaces + '│ ' + asci + ' ' + colors.green(configName) + ' ' + colors.red('✖ (already created)'),
					spaces + '│ ' + asci + ' ' + colors.green(configName) + ' ' + colors.red('✖ (can\'t contain slash)')
				);
				self.createDirs('./i0/custom/' + configName + '/', undefined, newSpaces);
			});
		}

		createDir(
			path,
			'generated',
			spaces + '└── ' + colors.yellow('generated') + ' ' + colors.green('✔'),
			spaces + '└── ' + colors.yellow('generated') + ' ' + colors.red('✖ (already created)'),
			spaces + '└── ' + colors.yellow('generated') + ' ' + colors.red('✖ (can\'t contain slash)')
		);
	}

    run(args, flags, vflags, callback) {

      // Run code here.
      // To throw an error, use: callback(new Error(msg))
      // To optionally return a result, use: callback(null, result)

		if(args.length < 1) {
			console.log('i0 initialization');
		} else {
			console.log(args.join(', ') + ' initialization');
		}

		createDir(
			'./',
			'i0',
			'└─┬ ' + colors.green('i0') + ' ' + colors.green('✔'),
			'└─┬ ' + colors.green('i0') + ' ' + colors.red('already initialized!'),
			'└─┬ ' + colors.green('i0') + ' ' + colors.red('can\'t contain slash!')
		);
		this.createDirs('./i0/', args);

      callback(null);

    }

  }

  return InitCommand;

})();
