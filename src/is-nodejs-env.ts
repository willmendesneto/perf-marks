/**
 * Boolean with the result of the check if package
 * is running on the browser or in a NodeJS environment
 *
 * @returns boolean
 *
 */
const isNodeJSEnv = typeof process !== 'undefined';

export { isNodeJSEnv };
