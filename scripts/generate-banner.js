/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const Mustache = require('mustache');
const pkg = require('../package.json');

const FILE_ENCODING = 'utf-8';

const readFile = filename => {
  return fs.readFileSync(filename, FILE_ENCODING);
};

const concat = opts => {
  const bannerContent = Mustache.render(readFile(opts.banner), { pkg: pkg });
  const fileContent = bannerContent + readFile(opts.src);

  fs.writeFileSync(opts.dest, fileContent, FILE_ENCODING);
  console.log(` ${opts.dest} built.`);
};

concat({
  src: 'lib/perf-marks.js',
  banner: '.banner',
  dest: 'lib/perf-marks.js',
});

concat({
  src: 'lib/perf-marks.min.js',
  banner: '.banner',
  dest: 'lib/perf-marks.min.js',
});
