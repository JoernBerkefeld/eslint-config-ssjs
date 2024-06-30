import { ESLint, Linter } from 'eslint';

interface ESLintSfmcSsjsConfigs {
	configs: {
		recommended: Linter.FlatConfig;
		legacy: {
			recommended: Linter.Config;
		};
	};
}

declare const plugin: ESLintSfmcSsjsConfigs & ESLint.Plugin;

export = plugin;
