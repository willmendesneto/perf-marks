# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][]

## [1.14.2][] - 2021-04-11

### Added

- Added blog post link in `README.md`

### Updated

- Decreasing bundle size of main bundle and `perf-marks/marks` entry-point 🎉

## [1.14.1][] - 2021-02-12

### Fixed

- Removing jest warning for typescript configuration in `jest.config.js`

### Updated

- Updating package dependencies
- Updating project to use NodeJS v15.8.0

## [1.14.0][] - 2020-09-30

### Updated

- Updating package dependencies
- `end()`: Adding built-in mark to compare if the application is not passing the values. This will give us all the required information for the consumers.

Without passing a mark to compare

```js
import * as PerfMarks from 'perf-marks';

...
PerfMarks.start('name-of-your-mark');
...
const markResults: PerfMarks.PerfMarksPerformanceEntry = PerfMarks.end('name-of-your-mark');
```

Passing a mark to compare

```js
import * as PerfMarks from 'perf-marks';

...
PerfMarks.start('name-of-your-mark');
PerfMarks.start('name-of-your-mark-to-be-compared-with');
...
const markResults: PerfMarks.PerfMarksPerformanceEntry = PerfMarks.end(
  'name-of-your-mark',
  'name-of-your-mark-to-be-compared-with'
);
```

## [1.13.4][] - 2020-08-21

### Fixed

- Fixing package distribution issue

## [1.13.3][] - 2020-08-21

### Added

- Adding dependency check via `depcheck` package

### Updated

- Updating dependencies to latest

### Fixed

- Removing unnecessary files from content to be published
- Checking if `module` and `module.require` are available globally before confirm the package is running in a NodeJS environment.

## [1.13.2][] - 2020-08-01

### Fixed

- Removing mark to compare if passed into `end()` method

## [1.13.1][] - 2020-08-01

### Updated

- Updating bundle options for `perf-marks/entries` entry point
- Updating bundle options for `perf-marks/marks` entry point
- Updating bundle options for `perf-marks/profiler` entry point
- Updating bundle options for `perf-marks/utils` entry point

## [1.13.0][] - 2020-08-01

### Updated

- Adding `ES2020` bundle on published content. Now the package supports `CommonJS`, `UMD`, `ESM`, `ES2015` and `ES2020` 📦

## [1.12.2][] - 2020-08-01

### Fixed

- Fixing UMD bundle by using Rollup. Typescript was required in the package and one of the TS functions is required in the bundle.

## [1.12.1][] - 2020-07-31

### Fixed

- Small bundle fix

## [1.12.0][] - 2020-07-31

### Added

- Adding entry points checks in bundlesize task
- New method `profiler()` to profile functions using perf-marks. The idea here is to avoid boilerplates on consumer's side by having an easy way to do that. So instead of doing this

```js
import { start, end } from 'perf-marks/marks';
const markName = 'name-of-the-mark-for-this-method';

const methodToBeMeasured = () => {
  /** method content */
};
// ...
start(markName);
const data = methodToBeMeasured();
const mark = end(markName);
return { data, mark };
```

The consumers can have same effect by doing this

```js
const methodToBeMeasured = () => {
  /** method content */
};
// `res` will contain `mark` with the information and `data`
// if `methodToBeMeasured` returns something
const res = profiler(methodToBeMeasured, 'name-of-the-mark-for-this-method');
```

### Fixed

- Fixing entry point for `perf-marks/utils`

## [1.11.0][] - 2020-07-25

### Added

- Adding new entry point for checkers. These checkers are exposing
  - `isNodeJSEnv`: Boolean with the result of the check if package is running on the browser or in a NodeJS environment
  - `isPerformanceObservableSupported`: Boolean with the result of the check if `PerformanceObservable` is supported for the current browser/NodeJS version
  - `isUserTimingAPISupported`: Boolean with the result of the check if User Timing API is supported for the current browser/NodeJS version

## [1.10.1][] - 2020-07-25

### Updated

- Checking entrypoints bundle size in `yarn bundlesize` command

## [1.10.0][] - 2020-07-24

### Updated

- Using PerformanceObserver as first-class data if code is running in NodeJS

## [1.9.0][] - 2020-07-24

### Added

- Adding support for NodeJS and VanillaJS. Now it runs in frontend and backend 🎉

## [1.8.1][] - 2020-05-13

### Updated

- Upgrading devDependencies to the latest version
- Upgrading `tslib` to `v1.12.0`
- Upgrading `nodejs` to `v12.16.2`
- Upgrading `engines` in `package.json` to accept NodeJS versions only greater or equal than `>=12`

## [1.8.0][] - 2020-02-16

### Added

- Adding new `isPerformanceObservableSupported` boolean for check if `PerformanceObservable` is supported for the current browser/NodeJS version

```js
import * as PerfMarks from 'perf-marks';

...
// Checking if `PerformanceObservable` is supported for the current browser/NodeJS version
if (PerfMarks.isPerformanceObservableSupported) {
  try {
  // If yes, start the PerformanceObserver
    const observer: PerformanceObserver = new PerformanceObserver(list => {
      // ... Do something
    });

    // register observer based on the entryTypes
    // E.G. for long task notifications
    observer.observe({ entryTypes: ['longtask'] });
  } catch (e) {}
  // ... Finishing the observer
  observer.disconnect();
}
...
```

### Updated

- Updating jsdom to v16
- Updating lint-staged to v10.0.2
- Updating dev dependencies

### Fixed

- Migrating from `uglifyjs` to `uglify-js` due to package deprecation

## [1.7.0][] - 2020-01-18

### Updated

- Updating `README.md` docs with latest changes
- Decreasing bundle size of the package to `176B` 🎉
- Updating NodeJS Version to 12.14.1

## [1.6.0][] - 2019-11-14

### Updated

- Adding support for CJS and ESM in entry points via build tool. By definition it will use CJS. However, this can be changed in the consumer's bundle step - built-in scenario if the consumer uses toolings such as `Webpack`, `Rollup`, or `Parcel`.
- Removing `babel` packages from dependencies. Not needed anymore after move to `rollup` build

## [1.5.1][] - 2019-11-08

### Updated

- Updated UMD bundle module to use `rollup` as UMD resolver

## [1.5.0][] - 2019-11-06

### Added

- Adding `sideEffects: false` to allow consumer's to tree-shake

### Updated

- Updated `main` entry point in `package.json` to point to `cjs` bundle content
- Updated UMD bundle module to use `browser` key

## [1.4.1][] - 2019-10-26

### Updated

- Adding docs for bundle optimization and how to use different bundles in web apps

## [1.4.0][] - 2019-10-26

### Fixed

- Fixing ignored files list

### Updated

- Updating UMD id for package

### Added

- Adding `tslib` for CJS bundle version

## [1.3.1][] - 2019-10-23

### Fixed

- Fixing ignored files list

## [1.3.0][] - 2019-10-22

### Fixed

- Adding `UMD` bundle as main entry for the package

### Updated

- Removing `tslib` for Stackblitz examples
- Updated entrypoints logic to remove files after `yarn bundlesize` command

### Added

- Adding different bundles for `CommonJS`, `UMD`, `ESM` and `ES2015`
- Using `ESM` definition for entry points for better tree shaking
- Exposing new methods in entry points
- Adding docs for entry points
- Adding docs yarn usage and installation

## [1.2.1][] - 2019-10-22

### Fixed

- Removing scripts and jest config from `.gitignore` file

## [1.2.0][] - 2019-10-22

### Removed

- Removing `package.js` for meteor modules

### Updated

- Adding more info in `ISSUE_TEMPLATE.md`
- Removing unnecessary files from npm pack
- ignoring main `src/index.ts` entry file on code coverage
- Adding `src/index.ts` entry file as main package route for resources

### Added

- Adding gif showing the package usage
- Adding ESLint rule for polyfills
- Adding entrypoints: `perf-marks/marks` and `perf-marks/entries`

## [1.1.0][] - 2019-10-20

### Updated

- Improving CircleCI pipeline and npm scripts to run on it
- Updating dependencies

### Fixed

- Moving from Travis-CI to CircleCI to fix pipeline
- Fixing coveralls integration
- Fixing eslint in `scripts/generate-banner.js` file

### Added

- Adding `contributing.md` file and section in `README.md`
- Adding package logo
- Adding types for `PerfMarks.end()` response

## [1.0.1][] - 2019-10-16

### Updated

- Removing sufix in `performance.measure` call
- Removing `src/index.tx` from code coverage evaluation
- Replacing local demo in favour of Stackblitz playground `https://stackblitz.com/edit/perf-marks-playground`

## [1.0.0][] - 2019-10-16

### Added

- Created `perf-marks` package
- Adding `perf-marks` demo page

[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/willmendesneto/perf-marks/tree/v1.0.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/willmendesneto/perf-marks/tree/v1.0.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/willmendesneto/perf-marks/tree/v1.1.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/willmendesneto/perf-marks/tree/v1.2.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.2.1...HEAD
[1.2.1]: https://github.com/willmendesneto/perf-marks/tree/v1.2.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/willmendesneto/perf-marks/tree/v1.3.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.3.1...HEAD
[1.3.1]: https://github.com/willmendesneto/perf-marks/tree/v1.3.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/willmendesneto/perf-marks/tree/v1.4.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.4.1...HEAD
[1.4.1]: https://github.com/willmendesneto/perf-marks/tree/v1.4.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/willmendesneto/perf-marks/tree/v1.5.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.5.1...HEAD
[1.5.1]: https://github.com/willmendesneto/perf-marks/tree/v1.5.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/willmendesneto/perf-marks/tree/v1.6.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.7.0...HEAD
[1.7.0]: https://github.com/willmendesneto/perf-marks/tree/v1.7.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.8.0...HEAD
[1.8.0]: https://github.com/willmendesneto/perf-marks/tree/v1.8.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.8.1...HEAD
[1.8.1]: https://github.com/willmendesneto/perf-marks/tree/v1.8.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.9.0...HEAD
[1.9.0]: https://github.com/willmendesneto/perf-marks/tree/v1.9.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.10.0...HEAD
[1.10.0]: https://github.com/willmendesneto/perf-marks/tree/v1.10.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.10.1...HEAD
[1.10.1]: https://github.com/willmendesneto/perf-marks/tree/v1.10.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.11.0...HEAD
[1.11.0]: https://github.com/willmendesneto/perf-marks/tree/v1.11.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.12.0...HEAD
[1.12.0]: https://github.com/willmendesneto/perf-marks/tree/v1.12.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.12.1...HEAD
[1.12.1]: https://github.com/willmendesneto/perf-marks/tree/v1.12.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.12.2...HEAD
[1.12.2]: https://github.com/willmendesneto/perf-marks/tree/v1.12.2
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.13.0...HEAD
[1.13.0]: https://github.com/willmendesneto/perf-marks/tree/v1.13.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.13.1...HEAD
[1.13.1]: https://github.com/willmendesneto/perf-marks/tree/v1.13.1
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.13.2...HEAD
[1.13.2]: https://github.com/willmendesneto/perf-marks/tree/v1.13.2
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.13.3...HEAD
[1.13.3]: https://github.com/willmendesneto/perf-marks/tree/v1.13.3
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.13.4...HEAD
[1.13.4]: https://github.com/willmendesneto/perf-marks/tree/v1.13.4
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.14.0...HEAD
[1.14.0]: https://github.com/willmendesneto/perf-marks/tree/v1.14.0
[unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.14.1...HEAD
[1.14.1]: https://github.com/willmendesneto/perf-marks/tree/v1.14.1


[Unreleased]: https://github.com/willmendesneto/perf-marks/compare/v1.14.2...HEAD
[1.14.2]: https://github.com/willmendesneto/perf-marks/tree/v1.14.2