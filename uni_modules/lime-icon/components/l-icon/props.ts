export const ariaProps = {
	ariaHidden: Boolean,
	ariaRole: String,
	ariaLabel: String,
	ariaLabelledby: String,
	ariaDescribedby: String,
	ariaBusy: Boolean,
	lStyle: String
}

export default {
	...ariaProps,
	// lClass: String,
	name: String,
	color: String,
	size: String,
	prefix: String,
	// type: String,
	inherit: {
		type: Boolean,
		default: true
	}
	// lStyle: String,
}