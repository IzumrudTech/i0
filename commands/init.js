const createDir = require('../libs/createDir');
const colors = require('colors/safe');

module.exports = (() => {

  'use strict';

  const Command = require('cmnd').Command;

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

	createDirs(path) {
		createDir(path, 'vendor', '  ├── vendor ' + colors.green('✔'),   '  ├── vendor ' + colors.red('✖ (already created)'));
		createDir(path, 'custom', '  ├── custom ' + colors.green('✔'), '  ├── custom ' + colors.red('✖ (already created)'));
		createDir(path, 'generated', '  └── generated ' + colors.green('✔'), '  └── generated ' + colors.red('✖ (already created)'));
	}

    run(args, flags, vflags, callback) {

      // Run code here.
      // To throw an error, use: callback(new Error(msg))
      // To optionally return a result, use: callback(null, result)

	  if(args.length < 1) {
		console.log('i0 initialization');
		createDir('./', 'i0', '└─┬ i0 ' + colors.green('✔'), '└─┬ i0 ' + colors.red('already initialized!'));
		this.createDirs('./i0/');
	  }

      callback(null);

    }

  }

  return InitCommand;

})();
