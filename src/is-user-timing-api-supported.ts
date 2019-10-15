/**
 * Boolean with the result of the check if User Timing API
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isUserTimingAPISupported =
  typeof performance !== 'undefined' &&
  typeof performance.now !== 'undefined' &&
  typeof performance.mark === 'function' &&
  typeof performance.clearMarks === 'function' &&
  typeof performance.measure === 'function' &&
  typeof performance.clearMeasures === 'function';

export { isUserTimingAPISupported };
