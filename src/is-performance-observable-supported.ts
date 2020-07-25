/**
 * Boolean with the result of the check if PerformanceObservable
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isPerformanceObservableSupported =
  typeof PerformanceObserver !== 'undefined' &&
  // eslint-disable-next-line compat/compat
  typeof PerformanceObserver.prototype !== 'undefined' &&
  // eslint-disable-next-line compat/compat
  typeof PerformanceObserver.prototype.constructor === 'function';

export { isPerformanceObservableSupported };
