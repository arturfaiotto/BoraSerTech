module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'linebreak-style': 'off',
		semi: ['error', 'always'],
		'no-console': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
	},
};
