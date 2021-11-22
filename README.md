# stimmy

[![Build][build-badge]][build]
[![License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]


## Description

This module provides a string variables replacer.

## Install

```bash
$ yarn add @rimiti/stimmy
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
import { stimmy } from '@rimiti/stimmy';
```

**From require**
```javascript
const { stimmy } = require('@rimiti/stimmy');
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

Run using yarn run `<script>` command.

    clean       - Remove temporarily folders.
    build       - Compile source files.
    build:watch - Interactive watch mode, compile sources on change.
    lint        - Lint source files.
    lint:fix    - Fix lint source files.
    test        - Runs all tests with coverage.
    test:watch  - Interactive watch mode, runs tests on change.


## License
MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/stimmy/blob/master/LICENSE)

[build-badge]: https://github.com/rimiti/stimmy/workflows/Test/badge.svg
[build]: https://github.com/rimiti/stimmy/actions?query=workflow%3ATest+branch%3Amaster
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/stimmy/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com