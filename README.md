# stimmy

[![Dependencies][prod-dependencies-badge]][prod-dependencies]
[![Code Climate score][codeclimate-score-badge]][codeclimate-score]
[![Codecov][coverage-badge]][coverage]
[![Code Climate issue][codeclimate-issues-badge]][codeclimate-issues]
[![Build Status][travis-badge]][travis-ci]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]


## Description

This module provides a string variables replacer.

## Install

```bash
$ npm install @rimiti/stimmy --save
```

## Features

- Can replace variables from an object.
- Can replace variables from an array.


## Documentation

* [From an array](#fromArray)
* [From an object](#fromObject)


## Examples

**From import**
```javascript
import stimmy from '@rimiti/stimmy';
```

**From require**
```javascript
const stimmy = require('@rimiti/stimmy');
```
**init pattern**
```javascript
// As default, use the {myVariable} pattern
const replacer = stimmy();

// If you want to customized default pattern (ex: {{myVariable}}
const replacer = stimmy('{{', '}}')
```

<a name="fromArray"/>

### From an array

```javascript
const str = replacer('This {0} is {1}!', ['module', 'awesome']);
// This module is awesome!
```

```javascript
const str = replacer('{0}% of code coverage, it\'s {1}...', [100, 'so amazing']);
// 100% of code coverage, it's so amazing...
```

<a name="fromObject"/>

### From an object

```javascript
const str = replacer('{timmy} My hobby is {hobby}...', {timmy: 'Timmmmmmmyy !!', hobby: 'running'});
// Timmmmmmmyy !! My hobby is running...
```

```javascript
const str = replacer('My name is {name}, I\'m {age}.', {name: 'stimmy', age: 25});
// My name is stimmy, I'm 25.
```

## Scripts

Run using npm run <script> command.

    clean - remove coverage data, Jest cache and transpiled files,
    lint - lint source files and tests,
    typecheck - check type annotations,
    test - lint, typecheck and run tests with coverage,
    test-only - run tests with coverage,
    test:watch - interactive watch mode to automatically re-run tests,
    build - compile source files,
    build:watch - interactive watch mode, compile sources on change.


## License
MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/stimmy/blob/master/LICENSE)

[prod-dependencies-badge]: https://david-dm.org/rimiti/stimmy/status.svg
[prod-dependencies]: https://david-dm.org/rimiti/stimmy
[codeclimate-score-badge]: https://api.codeclimate.com/v1/badges/4d4c1ba660e878509721/maintainability
[codeclimate-score]: https://codeclimate.com/github/rimiti/stimmy/maintainability
[coverage-badge]: https://codecov.io/gh/rimiti/stimmy/branch/master/graph/badge.svg
[coverage]: https://codecov.io/gh/rimiti/stimmy
[codeclimate-issues-badge]: https://codeclimate.com/github/rimiti/stimmy/badges/issue_count.svg
[codeclimate-issues]: https://codeclimate.com/github/rimiti/stimmy
[travis-badge]: https://travis-ci.org/rimiti/stimmy.svg?branch=master
[travis-ci]: https://travis-ci.org/rimiti/stimmy
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/stimmy/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
