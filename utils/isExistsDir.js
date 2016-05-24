const fs = require('fs');

module.exports = function isExistsDir(path) {
	try {
		if (!fs.existsSync(path)) {
			return true;
		} else {
			return false;
		}
	} catch(e) {
		throw e;
	}
};
