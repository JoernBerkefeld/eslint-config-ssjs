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
				Template: false,
				TriggeredSend: false,
				Variable: false,
				Write: false
			}
		}
	]
};
