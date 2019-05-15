
declare namespace colors {

	class Chain {
		black(str: any): Chain

		red(str: any): Chain

		green(str: any): Chain

		yellow(str: any): Chain

		blue(str: any): Chain

		magenta(str: any): Chain

		cyan(str: any): Chain

		white(str: any): Chain

		none(str: any): Chain

		toString(join?: string): string

		toArray(): string[]
	}

	class Color {
		chain: Chain

		black(str: any): str

		red(str: any): str

		green(str: any): str

		yellow(str: any): str

		blue(str: any): str

		magenta(str: any): str

		cyan(str: any): str

		white(str: any): str

		none(str: any): str
	}

	function black(str: any): string
	function red(str: any): string
	function green(str: any): string
	function yellow(str: any): string
	function blue(str: any): string
	function magenta(str: any): string
	function cyan(str: any): string
	function white(str: any): string
	function none(str: any): string

}

export as namespace colors;
export = Color;