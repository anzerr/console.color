
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
		return this.format('black', str);
	}

	red(str) {
		return this.format('red', str);
	}

	green(str) {
		return this.format('green', str);
	}

	yellow(str) {
		return this.format('yellow', str);
	}

	blue(str) {
		return this.format('blue', str);
	}

	magenta(str) {
		return this.format('magenta', str);
	}

	cyan(str) {
		return this.format('cyan', str);
	}

	white(str) {
		return this.format('white', str);
	}

	none(str) {
		return this.format('none', str);
	}

	toString(join = ' ') {
		return this.toArray().join(join);
	}

	toArray() {
		return this._chaindata;
	}

}

module.exports = (() => {
	let a = new Color();
	a.light = a;
	a.dark = new Color(a.chain, ENUM.DARK);
	return a;
})();
