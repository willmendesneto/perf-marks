import { isUserTimingAPISupported } from './is-user-timing-api-supported';
import { isPerformanceObservableSupported } from './is-performance-observable-supported';
import { isNodeJSEnv } from './is-nodejs-env';

// Map() is not used in order to decrease the bundle
let marksMap: { [key: string]: number | undefined } = {};
let marksObserver: { [key: string]: PerfMarksPerformanceEntry | undefined } = {};

/**
 * Get the current time based on User Timing API or Date
 *
 * @returns number
 *
 */
const getTimeNow = (): number => {
  if (isUserTimingAPISupported) {
    return performance.now();
  }

  return Date.now();
};

/**
 * Clear marks and measure of performance event
 *
 * @param markName - Performance marker to be checked
 *
 * @returns void
 *
 */
const clear = (markName: string): void => {
  marksMap[markName] = undefined;

  // Removes PerformanceObserver references from memory
  if (marksObserver[markName]) {
    marksObserver[markName] = undefined;
  }

  if (!isUserTimingAPISupported) {
    return;
  }

  // Some versions of NodeJS doesn't support this method
  if (!isNodeJSEnv) {
    performance.clearMeasures(markName);
  }

  performance.clearMarks(markName);
};

/**
 * Start performance measure of event
 *
 * @param markName - Performance marker to be started
 *
 * @returns number
 *
 */
const start = (markName: string): void => {
  if (isUserTimingAPISupported) {
    if (isNodeJSEnv && isPerformanceObservableSupported) {
      // eslint-disable-next-line compat/compat
      const obs = new PerformanceObserver(list => {
        marksObserver[markName] = list.getEntries().find(f => f.name === markName);
        obs.disconnect();
      });
      obs.observe({ entryTypes: ['measure'] });
    }
    performance.mark(markName);
  }
  marksMap[markName] = getTimeNow();
};

/**
 * Response type of `PerfMarks.end()` method
 *
 */
export type PerfMarksPerformanceEntry =
  | PerformanceEntry
  | { duration?: number; startTime?: number; name?: string; entryType?: string };

/**
 * Finishes performance measure of event and
 * clear marks and measure if applicable
 *
 * @param markName - Performance marker to be checked
 * @param markNameToCompare - Optional mark to compare to
 *
 * @returns PerfMarksPerformanceEntry
 *
 */
const end = (markName: string, markNameToCompare?: string): PerfMarksPerformanceEntry => {
  try {
    const startTime = marksMap[markName];

    // NodeJS is not using performance api directly from them for now
    if (!isUserTimingAPISupported || isNodeJSEnv) {
      // `performance.measure()` behaves diferently between frontend and
      // backend in Javascript applications. Using based on NodeJS docs
      performance.measure(markName, markName, markNameToCompare || markName);
      if (!!marksObserver[markName]) {
        return marksObserver[markName] as PerfMarksPerformanceEntry;
      }
      return startTime
        ? ({ duration: getTimeNow() - startTime, startTime, entryType: 'measure', name: markName } as PerformanceEntry)
        : {};
    }

    performance.measure(markName, markName, markNameToCompare || undefined);
    const entry: PerformanceEntry | undefined = performance.getEntriesByName(markName).pop();

    return entry || {};
  } catch (e) {
    // If previous mark was missing for some reason, this will throw.
    // This could only happen if something in event loop crashed
    // in an unexpected place earlier.
    // Don't pile on with more errors.

    return {};
  } finally {
    // Clear marks immediately to avoid growing buffer.
    clear(markName);
    // Clear marks used for comparison in case of it's value was passed
    if (markNameToCompare) {
      clear(markNameToCompare);
    }
  }
};

/**
 * Clear all marks and measures of performance event
 *
 * @returns void
 *
 */
const clearAll = (): void => {
  marksMap = {};
  marksObserver = {};

  if (!isUserTimingAPISupported) {
    return;
  }

  // Some versions of NodeJS doesn't support this method
  if (!isNodeJSEnv) {
    performance.clearMeasures();
  }
  performance.clearMarks();
};

export { start, end, clear, clearAll, isUserTimingAPISupported, isPerformanceObservableSupported };
