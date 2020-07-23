// eslint-disable-next-line no-undef
const { JSDOM } = require('jsdom');
const { PerformanceObserver } = require('perf_hooks');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.performance = require('usertiming');
global.PerformanceObserver = PerformanceObserver;

window.performance = global.performance;
window.PerformanceObserver = global.PerformanceObserver;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
