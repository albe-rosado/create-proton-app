'use strict';
const commander = require('commander');
const path = require('path');
const pkgJson = require('./package.json');

let projectDir;

const app = new commander.Command(pkgJson.name)
	.version(pkgJson.version)
	.arguments('<directory>')
	.action((dir) => {
		projectDir = dir;
	})
	.on('--help', () => {
		console.log('Example:');
		console.log();
		console.log('	$ create-proton-app `project_name` ');
		console.log();
	})
	.parse(process.argv);


if (typeof projectDir === 'undefined') {
	console.log('No directory especified ...');
	process.exit(1);
}

createApp();


const createApp = function(projectDir) {
	// Supporiting only npm initially, yarn will come in the future(maybe)
	const rootPath = path.resolve(projectDir);
	const projectName = path.basename(root);
	
	// dependencies to install
	const dependencies = ['proton-native'];

	//creates package.json on the new project dir
	
	

};




