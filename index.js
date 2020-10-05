/**
 * Copyright 2020 Jörn Berkefeld / joern.berkefeld@gmail.com
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
				ecmaVersion: 3,
			},
			rules: {
				'comma-dangle': ['error', 'never'],
				'new-cap': 'off',
				'no-console': 'off',
				'no-extend-native': 'off',
				'no-new': 'error',
				'no-prototype-builtins': 'off',
				'no-throw-literal': 'off',
				'no-use-before-define': ['error', { variables: true, functions: false, classes: false }],
				'no-var': 'off',
			},
			globals: {
				Account: false,
				AccountUser: false,
				Attribute: false,
				Base64Decode: false,
				Base64Encode: false,
				BeginImpressionRegion: false,
				BounceEvent: false,
				ContentArea: false,
				ContentAreaByName: false,
				ContentAreaObj: false,
				DataExtension: false,
				DateTime: false,
				DeliveryProfile: false,
				Email: false,
				EndImpressionRegion: false,
				FilterDefinition: false,
				Folder: false,
				Format: false,
				HTTP: false,
				HTTPHeader: false,
				List: false,
				Logout: false,
				Now: false,
				Platform: false,
				Portfolio: false,
				QueryDefinition: false,
				Redirect: false,
				Request: false,
				Script: false,
				Send: false,
				SendClassification: false,
				SenderProfile: false,
				Stringify: false,
				Subscriber: false,
				Substring: false,
				Template: false,
				TriggeredSend: false,
				Variable: false,
				Write: false,
			},
		},
	],
};
