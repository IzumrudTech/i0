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

    run(args, flags, vflags, callback) {

      // Run code here.
      // To throw an error, use: callback(new Error(msg))
      // To optionally return a result, use: callback(null, result)



      callback(null, 'hello cli!');

    }

  }

  return InitCommand;

})();
