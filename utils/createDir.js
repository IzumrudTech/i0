const fs = require('fs');
const isExistsDir = require('./isExistsDir');

module.exports = function createDir(path, name, msg, isExistsMsg) {
	try {
		if (isExistsDir(path + name)) {
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
