// eslint-disable-next-line no-undef
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// Adding User Timing API mock
global.performance = require('usertiming');
window.performance = global.performance;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
