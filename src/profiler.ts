import { PerfMarksPerformanceEntry, start, end } from './marks';

// const isPromise = (obj: any) =>
//   !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

/**
 * profiler using User Timing Api method.
 * It will return a `PerfMarksPerformanceEntry` or
 * an PerfMarksPerformanceEntry inside `mark` key + the content for the callback method
 * If the given callback returns something
 *
 * usage:
 *
 * perfMarksProfile(
 *   () => { /** method content *\/}
 *   'name of the mark for this method',
 *   );
 *
 * @param {(() => any | Promise<any>)} callback
 * @param {string} name
 * @returns {Promise<PerfMarksPerformanceEntry>}
 */
const profiler = async (
  callback: () => any | Promise<any>,
  name: string,
): Promise<{ data?: any; mark: PerfMarksPerformanceEntry }> => {
  // Starting the marks
  start(name);

  try {
    const data = await callback();
    // Finishing the marks and including `PerfMarksPerformanceEntry` on the response
    const mark = end(name);
    // Passing data as an object
    return !!data ? Object.assign({}, { data, mark }) : { mark };
  } catch (error) {
    end(name);
    throw error;
  }
};

export { profiler };
