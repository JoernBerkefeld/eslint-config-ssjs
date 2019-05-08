# eslint-config-ssjs

Preset for Salesforce Marketing Cloud's Server-Side JavaScript.

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) 


## Installation

```
$ npm install --save-dev eslint eslint-config-ssjs
```


## Usage

Once the `eslint-config-ssjs` package is installed, you can use it by specifying `ssjs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring). 

**Important:** Make sure that your SSJS files end on ``*.ssjs`` and not on ``*.js``.

```js
{
  "extends": "ssjs",
  "rules": {
    // your other rules
  }
}
```


### Using the `ssjs` config with `eslint:recommended`

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


## License

MIT licensed
