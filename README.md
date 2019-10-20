# Perf-marks

[![Greenkeeper badge](https://badges.greenkeeper.io/willmendesneto/perf-marks.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/perf-marks-playground)

[![npm version](https://badge.fury.io/js/perf-marks.svg)](http://badge.fury.io/js/perf-marks) [![npm downloads](https://img.shields.io/npm/dm/perf-marks.svg)](https://npmjs.org/perf-marks)
[![MIT License](https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square)](LICENSE)

[![Build Status](https://circleci.com/gh/willmendesneto/perf-marks.svg?style=shield)](https://circleci.com/gh/willmendesneto/perf-marks)
[![Coverage Status](https://coveralls.io/repos/willmendesneto/perf-marks/badge.svg?branch=master)](https://coveralls.io/r/willmendesneto/perf-marks?branch=master)
[![Dependency Status](https://david-dm.org/willmendesneto/perf-marks.svg)](https://david-dm.org/willmendesneto/perf-marks)

[![NPM](https://nodei.co/npm/perf-marks.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/perf-marks)
[![NPM](https://nodei.co/npm-dl/perf-marks.png?height=3&months=3)](https://npmjs.org/perf-marks)

![Perf marks](./images/perf-marks.png)

The simplest and lightweight solution for [User Timing API](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API) in Javascript. Simple how it should be.

## Contributing

Please check our [contributing.md](https://github.com/willmendesneto/perf-marks/blob/master/contributing.md) to know more about setup and how to contribute.

## Setup and installation

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

> Please make sure that you are using NodeJS version 6.10.2

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version 6.10.2
```

## Demo

Try out our [demo on Stackblitz](https://perf-marks-playground.stackblitz.io)!

![Perf marks in action](./images/perf-marks-in-action.gif)

## Run the app

```bash
$ npm start
```

## Run the tests

```bash
$ npm test # run the tests
```

## Run the build

```bash
$ npm run build # run the tests
```

## `PerfMarks`

This service exposes a few different methods with which you can interact with feature toggle service.

### `PerfMarks.start(markName)`

Adds the user timing api marker instrumentation in your application.

### `PerfMarks.end(markName)`

Returns the results for the specified marker

### `PerfMarks.clear(markName)`

Removes the specified marker

### `PerfMarks.clearAll()`

Removes all the marker

## Publish

this project is using `np` package to publish, which makes things straightforward. EX: `np <patch|minor|major>`

> For more details, [please check np package on npmjs.com](https://www.npmjs.com/package/np)

## Author

**Wilson Mendes (willmendesneto)**

- <https://twitter.com/willmendesneto>
- <http://github.com/willmendesneto>
