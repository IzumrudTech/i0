const createDir = require('../libs/createDir');

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
		createDir(path, 'vendor', '  ├── vendor',   '  ├── vendor (already created)');
		createDir(path, 'custom', '  ├── custom', '  ├── custom (already created)');
		createDir(path, 'generated', '  └── generated', '  └── generated (already created)');
	}

    run(args, flags, vflags, callback) {

      // Run code here.
      // To throw an error, use: callback(new Error(msg))
      // To optionally return a result, use: callback(null, result)

	  if(args.length < 1) {
		console.log('i0 initialization');
		createDir('./', 'i0', '└─┬ i0', '└─┬ i0 already initialized!');
		this.createDirs('./i0/');
	  }

      callback(null);

    }

  }

  return InitCommand;

})();
