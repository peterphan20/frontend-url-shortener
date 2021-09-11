module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"boost-desktop": "url('./assets/bg-boost-desktop.svg')",
				"boost-mobile": "url('./assets/bg-boost-mobile.svg')",
				"shorten-desktop": "url('./assets/bg-shorten-desktop.svg')",
				"shorten-mobile": "url('./assets/bg-shorten-mobile.svg')",
			}),
			backgroundColor: {
				cyan: "hsl(180, 66%, 49%)",
				violet: "hsl(257, 27%, 26%)",
				footer: "hsl(260, 8%, 14%)",
			},
			fontFamily: {
				body: ["Poppins", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
