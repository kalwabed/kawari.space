module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ['./components/**/*.{tsx}', './pages/**/*.{tsx}'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#333',
			},
		},
	},
	variants: {},
	plugins: [],
}
