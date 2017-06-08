module.exports = {
  "extends": [
    "tslint:latest",
    "tslint-eslint-rules",
    "tslint-react",
    "tslint-config-prettier"
  ],
  "rules": {
    // TSlint rules 
    "arrow-parens": false,
    "cyclomatic-complexity": [true, 10],
    "indent": [true, "spaces", 2],
    "interface-name": [false, "always-prefix"],
    "max-line-length": false,
    "member-access": false,
    "no-console": [true,
      "time",
      "timeEnd",
      "trace"
    ],
    "no-unused-variable": true,
    "object-literal-sort-keys": false,
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "variable-name": [
      true,
      "allow-leading-underscore",
      "allow-pascal-case",
      "ban-keywords",
      "check-format"
    ]
    // "ordered-imports": true,
    // "prefer-template": true, // with tslint 5
  },
}