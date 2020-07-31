import resolve from 'rollup-plugin-node-resolve';
import { browser, module } from './package.json';

const config = {
  input: module,
  output: {
    file: browser,
    format: 'umd',
    name: 'PerfMarks',
  },
  plugins: [resolve()],
};

export default config;
