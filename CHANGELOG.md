# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][]

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
