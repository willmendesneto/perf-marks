import { isUserTimingAPISupported } from './is-user-timing-api-supported';

// Map() is not used in order to decrease the bundle
let marksMap: { [key: string]: number | undefined } = {};

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

  return Date.now ? Date.now() : +new Date();
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

  if (!isUserTimingAPISupported) {
    return;
  }

  performance.clearMeasures(markName);
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
    performance.mark(markName);
  }
  marksMap[markName] = getTimeNow();
};

/**
 * Finishes performance measure of event and
 * clear marks and measure if applicable
 *
 * @param markName - Performance marker to be checked
 *
 * @returns PerformanceEntry | { duration?: number; startTime?: number }
 *
 */
const end = (
  markName: string,
  markNameToCompare?: string,
): PerformanceEntry | { duration?: number; startTime?: number } => {
  try {
    const startTime = marksMap[markName];
    if (!isUserTimingAPISupported) {
      return startTime ? { duration: getTimeNow() - startTime, startTime } : {};
    }

    performance.measure(markName, markName, markNameToCompare || undefined);
    const entry: PerformanceEntry | undefined = performance.getEntriesByName(markName).pop();

    if (entry) {
      return entry;
    }

    return {};
  } catch (e) {
    // If previous mark was missing for some reason, this will throw.
    // This could only happen if something in event loop crashed
    // in an unexpected place earlier.
    // Don't pile on with more errors.

    return {};
  } finally {
    // Clear marks immediately to avoid growing buffer.
    clear(markName);
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

  if (!isUserTimingAPISupported) {
    return;
  }

  performance.clearMeasures();
  performance.clearMarks();
};

export { start, end, clear, clearAll };
