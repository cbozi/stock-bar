export default class Stock {
	code: string;
	symbol: string;
	name: string | null;
	alias: string;
	hold_price = 0;
	hold_number = 0;
	price = 0;
	updown = 0;
	percent = 0;
	high = 0;
	low = 0;
	open = 0;
	yestclose = 0;

	constructor(
		code: string,
		alias?: string | undefined,
		hold_price?: number | undefined,
		hold_number?: number | undefined,
	) {
		this.code = code;
		this.symbol = code;
		this.name = null;
		this.alias = alias ?? '';
		this.hold_price = hold_price ?? 0;
		this.hold_number = hold_number ?? 0;
	}
	update(origin: Stock) {
		this.name = origin.name ?? this.name;
		this.price = origin.price ?? this.price;
		this.high = origin.high ?? this.high;
		this.low = origin.low ?? this.low;
		this.updown = origin.price ? origin.price - this.yestclose : this.percent;
		this.percent = origin.price
			? Math.round((origin.price / this.yestclose - 1) * 10000) / 10000
			: this.percent;
		this.open = origin.open ?? this.open;
		this.yestclose = origin.yestclose ?? this.yestclose;
	}
}
