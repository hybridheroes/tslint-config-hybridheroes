# TSLint Config Hybrid Heroes

> The [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) in use by Hybrid Heroes

This config's goal is to detect errors and to increase maintainability. For code style, use [prettier](https://github.com/prettier/prettier). 

## Installation

```sh
npm install hybridheroes/tslint-config-hybridheroes --save
```

### Compatibility

| TSLint version | tslint-config-hybridheroes version |
| --- | --- |
| **>= 5.3**   | unsupported |
| **== 5.2**   | 1.x (supporting TypeScript 2.1.x) |

## Usage

In `tslint.json`:

```json
{
  "extends": "@hybridheroes/tslint-config"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)
* [tslint-react](https://github.com/palantir/tslint-react)

## Roadmap

1. Include Codelyzer
2. Support TypeScript 2.3+
3. Find a way to limit the number of statements per function as [seen in ESLint](http://eslint.org/docs/rules/max-statements) 

## License

MIT

