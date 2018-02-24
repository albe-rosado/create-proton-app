'use strict';
const dns = require('dns');



const isOnline = () => {
	return new Promise((resolve) => {
		dns.lookup('www.gnome.org', (error) => {
			if (error) {
				resolve(false);
			}
			else {
				resolve(true);
			}
		});
	});
};

const isOldNode = () => {
	// anything older than v4 is considered old
	let currentMajorNodeVersion = parseInt(process.versions.node.split('.')[0]);
	let acceptableMajorVersion = 4;
	return currentMajorNodeVersion < acceptableMajorVersion;
};


module.exports = {
	isOnline,
	isOldNode,
};
