# TSLint Config Hybrid Heroes

> The [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) in use by Hybrid Heroes

## Installation

```sh
npm install hybridheroes/tslint-config-hybridheroes --save
```

### Compatibility

| TSLint version | tslint-config-hybridheroes version |
| --- | --- |
| **>= 5.x**   | unsupported |
| **>= 4.x**   | 1.x (supporting TypeScript 2.1.x) |

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-hybridheroes"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)

## Roadmap

1. Include Codelyzer
2. Support TypeScript 2.3+
3. Find a way to limit the number of statements per functions as [seen in ESLint](http://eslint.org/docs/rules/max-statements) 

## License

MIT

