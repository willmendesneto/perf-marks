/**
 * Boolean with the result of the check if package
 * is running on the browser or in a NodeJS environment
 *
 * @returns boolean
 *
 */
const isNodeJSEnv = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';

// Interesting fact:
// Some bundlers are resolving `process`, so it needs to check for process.release.name
// since it's a NodeJS only environment value.
// More details in https://nodejs.org/api/process.html#process_process_release
export { isNodeJSEnv };
