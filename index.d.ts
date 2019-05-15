
declare class Chain {
	black(str: any): Chain;
	red(str: any): Chain;
	green(str: any): Chain;
	yellow(str: any): Chain;
	blue(str: any): Chain;
	magenta(str: any): Chain;
	cyan(str: any): Chain;
	white(str: any): Chain;
	none(str: any): Chain;
	toString(join?: string): string;
	toArray(): string[];
}

declare class Color {
	chain: Chain;
	black(str: any): string;
	red(str: any): string;
	green(str: any): string;
	yellow(str: any): string;
	blue(str: any): string;
	magenta(str: any): string;
	cyan(str: any): string;
	white(str: any): string;
	none(str: any): string;
}

declare const _default: Color;
export = _default;
