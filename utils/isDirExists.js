const fs = require('fs');

module.exports = function isDirExists(path) {
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
