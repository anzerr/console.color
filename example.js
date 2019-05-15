
const color = require('./index.js');

let keys = [
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white'
];

for (let i in keys) {
	console.log(color[keys[i]](i));
}

console.log(color.chain.red('red').blue('blue').none('chained with normal text').green('green').toString(), 'done');

console.log(...color.chain.red('red').blue('blue').none('chained with normal text').green('green').toArray(), 'done');
