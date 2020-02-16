/**
 * Boolean with the result of the check if PerformanceObservable
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isPerformanceObservableSupported =
  typeof PerformanceObserver !== 'undefined' &&
  typeof PerformanceObserver.prototype !== 'undefined' &&
  typeof PerformanceObserver.prototype.constructor === 'function';

export { isPerformanceObservableSupported };
