/* eslint-disable */
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

const PACKAGE_ROOT = path.resolve(__dirname, '../');
const ENTRYPOINTS_FOLDER = `${PACKAGE_ROOT}/dist/esm/entrypoints`;

const files = glob.sync(`${ENTRYPOINTS_FOLDER}/*.*`, {
  cwd: __dirname,
});

const replaceFrom = new RegExp("'../", 'g');

files.forEach(file => {
  const fileName = path.basename(file);
  const fileContent = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(`${PACKAGE_ROOT}/${fileName}`, fileContent.replace(replaceFrom, "'./dist/esm/"));
  fs.unlinkSync(file);
});

fs.removeSync(`${ENTRYPOINTS_FOLDER}`);
