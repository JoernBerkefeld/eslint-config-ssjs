# eslint-config-ssjs

Preset for Salesforce Marketing Cloud's Server-Side JavaScript.

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

[![NPM](https://nodei.co/npm/eslint-config-ssjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eslint-config-ssjs/)

## Features

-   rules limited to \*.ssjs files but can be extended to other files by adapting your eslint.config.js
-   all SSJS classes/methods offered by SFMC are defined as unchangable globals
-   ecma script 3 pre-defined
-   quirks of SSJS handled via custom rules
-   based on eslint recommended rules with as little changes as possible

## Installation

```batch
npm install --save-dev eslint eslint-config-ssjs
```

## Usage

### Flat Config: eslint.config.js

**Important:** Requires ESLint >=8.56.0 and eslint-config-ssjs >=2.0.0

This plugin exports a recommended config that enforces good practices.

#### ES Module (Recommended)

The folowing will limit SSJS rules to files ending on `*.ssjs`:

```js
import sfmcSsjs from 'eslint-config-ssjs';

export default [
	// …
	{
		...sfmcSsjs.configs.recommended,
		files: ['**/*.ssjs'],
	},
];
```

If you don't plan on writing any browser (normal) JavaScript, you can also use the following. This will apply the rules to all files:ggn

```js
import sfmcSsjs from 'eslint-config-ssjs';

export default [
	// …
	sfmcSsjs.configs.recommended,
];
```

#### CommonJS

```js
'use strict';
const sfmcSsjs = require('eslint-config-ssjs');

module.exports = [
	// …
	{
		...sfmcSsjs.configs.recommended,
		files: ['**/*.ssjs'],
	},
];
```

### Legacy: .eslintrc.\* or package.json

**Important:** Requires ESLint <9.0.0 and eslint-config-ssjs <2.0.0

Once the `eslint-config-ssjs` package is installed, you can use it by specifying `ssjs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

**Important:** Make sure that your SSJS files end on `*.ssjs` and not on `*.js`.

```js
{
  "extends": "ssjs",
  "rules": {
    // your other rules
  }
}
```

It's good practice to use [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) in your project to support front end scripts.

To use SSJS in conjunction with ESLint's recommended rule set, extend with both, making sure to list `ssjs` last. We do recommend to also use this together with `eslint-config-prettier` and `eslint-plugin-prettier`

```js
{
  "extends": ["eslint:recommended", "prettier", "ssjs"],
  "plugins": ["prettier"],
  "rules": {
    // your other rules that don't conflict with the SSJS config
  },
}
```

## Using Prettier with SSJS

Starting with version 2.x of prettier, the plugin automatically has "trailingComma" set to "es5". That's a problem because SSJS actually does not support this.

Also, SFMC tends to remove all tabs when you save queries, scripts, code snippets, emails and cloud pages. We hence strongly recommend to set `useTabs` to `false` and define `tabWidth` according to your liking (2 or 4 are typical values).

Add the following to your `.prettierrc` file to ensure the above concerns are adressed:

```json
{
	"useTabs": false,
	"tabWidth": 4,
	"singleQuote": true,
	"overrides": [
		{
			"files": "*.ssjs",
			"options": {
				"trailingComma": "none"
			}
		}
	]
}
```

## Using the .ssjs extension in VSCode

Make sure you associate `*.ssjs` with JavaScript in your IDE. That should automatically enable linting via ESLint.

## License

MIT licensed
