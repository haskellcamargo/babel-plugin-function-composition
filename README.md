# babel-plugin-function-composition

<a href="https://app.codesponsor.io/link/osmbVLutaA7HXKYJpSN5uQYQ/haskellcamargo/babel-plugin-function-composition" rel="nofollow"><img src="https://app.codesponsor.io/embed/osmbVLutaA7HXKYJpSN5uQYQ/haskellcamargo/babel-plugin-function-composition.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

This plugin is made to work with point-free (tacit) functional programming by composing functions
over piping. It is inspired by the work of [babel-plugin-pipe-operator-curry](https://github.com/Swizz/babel-plugin-pipe-operator-curry),
but with a very different purpose, with focus on omitting arguments. I've overloaded the operator `&` for that. You
can built more complex functions from simple ones.

## Examples

```javascript
import { add, multiply } from 'ramda';

const add5AndMul5 = add(5) & multiply(5);
```

Turn into

```javascript
import { add, multiply } from 'ramda';

const add5AndMul5 = (...args) => multiply(5)(add(5)(...args));
```

## Disabling in current scope

If you want to use the original bitwise and operator, you can disable this plugin in
current scope (and it children scopes) using `'no composition` directive.

## Installation

```sh
$ npm install --save-dev babel-plugin-function-composition
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["function-composition"]
}
```

### Via CLI

```sh
$ babel --plugins function-composition script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['function-composition']
});
```

# License

MIT
