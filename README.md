# eslint-config-ssjs

Preset for Salesforce Marketing Cloud's Server-Side JavaScript.

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

[![NPM](https://nodei.co/npm/eslint-config-ssjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eslint-config-ssjs/)

## Features

-   rules limited to \*.ssjs files
-   all SSJS classes/methods offered by SFMC are defined as unchangable globals
-   ecma script 3 pre-defined
-   quirks of SSJS handled via custom rules
-   based on eslint recommended rules with as little changes as possible

## Installation

```
$ npm install --save-dev eslint eslint-config-ssjs
```

## Usage

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

To use SSJS in conjunction with ESLint's recommended rule set, extend them both, making sure to list `ssjs` last:

```js
{
  "extends": ["eslint:recommended", "ssjs"],
  "rules": {
    // your other rules
  }
}
```

## Using the .ssjs extension in VSCode

Make sure you associate `*.ssjs` with JavaScript in your IDE. That should automatically enable linting via ESLint.

## License

MIT licensed
