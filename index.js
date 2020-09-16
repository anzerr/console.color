
const util = require('util');

const ENUM = {
		LIGTH: 90,
		DARK: 30,
		CODE: {
			black: 0,
			red: 1,
			green: 2,
			yellow: 3,
			blue: 4,
			magenta: 5,
			cyan: 6,
			white: 7,
			none: 0,
		}
	}, wrap = (n) => `\x1b[${n}m`;

class Color {

	constructor(chain = false, offset = ENUM.LIGTH) {
		this._offset = offset;
		this._chain = chain;
		this._chaindata = [];
	}

	get chain() {
		return new Color(true, this._offset);
	}

	format(key, str) {
		let offset = (key === 'none') ? 0 : this._offset + ENUM.CODE[key];
		if (this._chain) {
			this._chaindata.push(`${wrap(offset)}${str}${wrap(ENUM.CODE.none)}`);
		}
		return (this._chain) ? this : `${wrap(offset)}${str}${wrap(ENUM.CODE.none)}`;
	}

	black(str) {
		return this.format('black', util.format(str));
	}

	red(str) {
		return this.format('red', util.format(str));
	}

	green(str) {
		return this.format('green', util.format(str));
	}

	yellow(str) {
		return this.format('yellow', util.format(str));
	}

	blue(str) {
		return this.format('blue', util.format(str));
	}

	magenta(str) {
		return this.format('magenta', util.format(str));
	}

	cyan(str) {
		return this.format('cyan', util.format(str));
	}

	white(str) {
		return this.format('white', util.format(str));
	}

	none(str) {
		return this.format('none', util.format(str));
	}

	toString(join = ' ') {
		if (!this._chain) {
			throw new Error('not a chain why call this?');
		}
		return this.toArray().join(join);
	}

	toArray() {
		if (!this._chain) {
			throw new Error('not a chain why call this?');
		}
		return this._chaindata;
	}

}

module.exports = (() => {
	const a = new Color();
	a.light = a;
	a.dark = new Color(a.chain, ENUM.DARK);
	a.default = a;
	return a;
})();
