module.exports = {
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	// pluginSearchDirs: false,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
