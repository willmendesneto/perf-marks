// Package metadata for perf-marks.js.

Package.describe({
  name: 'willmendesneto:perf-marks',
  summary: 'The simplest solution for feature toggle in Javascript. Simple how it should be.',
  version: '0.0.1',
  git: 'https://github.com/willmendesneto/perf-marks.git',
});

Package.onUse(function(api) {
  api.addFiles('lib/perf-marks.js', 'client');
});
