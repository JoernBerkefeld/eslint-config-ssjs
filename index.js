/**
 * Copyright 2016 Jörn Berkefeld / joern.berkefeld@gmail.com
 *
 * Licensed under the MIT License.
 */

/* eslint-env node */
'use strict';

module.exports = {
	overrides: [
		{
			files: ['*.ssjs'],
			parserOptions: {
				ecmaVersion: 3
			},
			rules: {
				'new-cap': 'off',
				'no-console': 'off',
				'no-extend-native': 'off',
				'no-new': 'error',
				'no-throw-literal': 'off',
				'no-var': 'off'
			},
			globals: {
				DataExtension: false,
				HTTP: false,
				Platform: false,
				Script: false,
				Stringify: false,
				Subscriber: false,
				Variable: false,
				Write: false
			}
		}
	]
};
