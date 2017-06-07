module.exports = {
  "extends": [
    "tslint-config-standard",
  ],
  "rules": {
    "arrow-return-shorthand": true,
    "cyclomatic-complexity": [true, 10],
    "no-debugger": true,
    "no-shadowed-variable": true,
    "ordered-imports": true,
    "prefer-const": true,
    // "prefer-template": true, // with tslint 5
    "semicolon": [true, "always"],
    "indent": [true, "spaces", 2],
  },
}