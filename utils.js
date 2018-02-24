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
	let acceptableMajorVersion = 6;
	return currentMajorNodeVersion < acceptableMajorVersion;
};

const ansiColors = {
	"reset" : "\x1b[0m",
	"hicolor" : "\033[1m",
	"underline" : "\033[4m",
	"inverse" : "\033[7m",
	// foreground colors
	"black" : "\033[30m",
	"red" : "\033[31m",
	"green" : "\033[32m",
	"yellow" : "\033[33m",
	"blue" : "\033[34m",
	"magenta" : "\033[35m",
	"cyan" : "\033[36m",
	"white" : "\033[37m",
	// background colors
	"bg_black" : "\033[40m",
	"bg_red" : "\033[41m",
	"bg_green" : "\033[42m",
	"bg_yellow" : "\033[43m",
	"bg_blue" : "\033[44m",
	"bg_magenta" : "\033[45m",
	"bg_cyan" : "\033[46m",
	"bg_white" : "\033[47m",
};


module.exports = {
	isOnline,
	isOldNode,
	ansiColors,
};
