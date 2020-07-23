import { isUserTimingAPISupported } from './is-user-timing-api-supported';
import { isNodeJSEnv } from './is-nodejs-env';

/**
 * Response type of `PerfMarks.getNavigationMarker()` and `Perf.getEntriesByType()` methods
 *
 */
export type PerfMarksPerformanceNavigationTiming = PerformanceNavigationTiming | { [key: string]: any };

/**
 * Gets the result for all marks that matches with the given mark name
 *
 * @param markName - Performance marker to be checked
 *
 * @returns PerfMarksPerformanceNavigationTiming[]
 *
 */
const getEntriesByType = (entryName: string): PerfMarksPerformanceNavigationTiming[] => {
  // NodeJS doesn't have support for getEntriesByType
  if (!isUserTimingAPISupported || isNodeJSEnv) {
    return [];
  }

  return (performance.getEntriesByType(entryName) as PerfMarksPerformanceNavigationTiming[]) || [];
};

/**
 * Gets the marks for `navigation` loaded mark
 *
 * @returns PerfMarksPerformanceNavigationTiming[]
 *
 */
const getNavigationMarker = (): PerfMarksPerformanceNavigationTiming => getEntriesByType('navigation').pop() || {};

export { getNavigationMarker, getEntriesByType };
