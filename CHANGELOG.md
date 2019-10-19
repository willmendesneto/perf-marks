# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][]

### Updated

- Improving CircleCI pipeline and npm scripts to run on it

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
