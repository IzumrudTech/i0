const fs = require('fs');
const isDirExists = require('./isDirExists');
const colors = require('colors/safe');

module.exports = function createDir(path, name, msg, isExistsMsg, containsSlash) {
	try {
		if (/\/+/.test(name)) {
			console.log(containsSlash);
			return;
		}
		if (isDirExists(path + name)) {
			fs.mkdirSync(path + name);
			if (msg) {
				console.log(msg);
			}
		} else {
			if (isExistsMsg) {
				console.log(isExistsMsg);
			}
		}
	} catch(e) {
		console.error(e);
	}
};
