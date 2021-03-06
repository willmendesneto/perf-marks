jest.doMock('../is-nodejs-env', () => ({
  isNodeJSEnv: false,
}));

jest.doMock('../is-performance-observable-supported', () => ({
  isPerformanceObservableSupported: true,
}));

import * as PerfMarks from '../entrypoints/marks';

describe('PerfMarks: User timing API is available', () => {
  beforeEach(() => {
    spyOn(Date, 'now').and.callThrough();
    spyOn(performance, 'now').and.callThrough();
    spyOn(performance, 'measure');
    spyOn(performance, 'mark');
    spyOn(performance, 'clearMeasures');
    spyOn(performance, 'clearMarks');
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should use `performance.mark` if user calls start mark', () => {
    const mark = 'mark';

    PerfMarks.start(mark);
    expect(performance.mark).toHaveBeenCalledWith(mark);
    expect(performance.now).toHaveBeenCalled();
    expect(Date.now).not.toHaveBeenCalled();
  });

  it('should remove markers and measures if `clear` is called', () => {
    const mark = 'mark';
    PerfMarks.start(mark);
    PerfMarks.clear(mark);

    expect(performance.clearMeasures).toHaveBeenCalledWith(mark);
    expect(performance.clearMarks).toHaveBeenCalledWith(mark);
    expect(performance.getEntriesByName(mark)).toHaveLength(0);
  });

  it('should remove all markers and measures if `clearAll` is called', () => {
    PerfMarks.start('mark-1');
    PerfMarks.start('mark-2');

    PerfMarks.clearAll();

    expect(performance.clearMeasures).toHaveBeenCalled();
    expect(performance.clearMarks).toHaveBeenCalled();
    expect(performance.getEntries()).toHaveLength(0);
  });

  it('should return user timing information if user finishes mark', () => {
    jest.spyOn(performance, 'getEntriesByName').mockImplementation(() => [
      {
        duration: 1,
        startTime: 2,
        toJSON: () => null,
        entryType: '',
        name: '',
      },
    ]);

    const mark = 'mark';
    PerfMarks.start(mark);
    const result = PerfMarks.end(mark);

    expect(result).toEqual(
      expect.objectContaining({
        duration: expect.any(Number),
        startTime: expect.any(Number),
      }),
    );
  });

  it('should remove mark and compared mark if second parameter was passed to `end()`', () => {
    jest.spyOn(performance, 'getEntriesByName').mockImplementation(() => [
      {
        duration: 1,
        startTime: 2,
        toJSON: () => null,
        entryType: '',
        name: '',
      },
    ]);

    const mark = 'mark';
    const secondMark = 'mark-end-of-measurement';

    PerfMarks.start(mark);
    PerfMarks.start(secondMark);
    PerfMarks.end(mark, secondMark);

    expect(performance.clearMarks).toHaveBeenNthCalledWith(1, mark);
    expect(performance.clearMarks).toHaveBeenNthCalledWith(2, secondMark);
    expect(performance.clearMeasures).toHaveBeenNthCalledWith(1, mark);
    expect(performance.clearMeasures).toHaveBeenNthCalledWith(2, secondMark);
  });

  it('should remove mark and compared mark with the one created internally if second parameter was NOT passed to `end()`', () => {
    jest.spyOn(performance, 'getEntriesByName').mockImplementation(() => [
      {
        duration: 1,
        startTime: 2,
        toJSON: () => null,
        entryType: '',
        name: '',
      },
    ]);

    const mark = 'mark';

    PerfMarks.start(mark);
    PerfMarks.end(mark);

    expect(performance.clearMarks).toHaveBeenNthCalledWith(1, mark);
    expect(performance.clearMarks).toHaveBeenNthCalledWith(2, `${mark}-end`);
    expect(performance.clearMeasures).toHaveBeenNthCalledWith(1, mark);
    expect(performance.clearMeasures).toHaveBeenNthCalledWith(2, `${mark}-end`);
  });

  it('should return user timing information if user finishes mark', () => {
    const mark = 'mark';
    PerfMarks.start(mark);
    const result = PerfMarks.end('this-mark-does-not-exist');

    expect(result).toEqual({});
  });

  it('should return user timing information if user finishes mark', () => {
    const mark = 'mark';

    jest.spyOn(performance, 'measure').mockImplementation(() => {
      throw new Error('this function does not exist');
    });
    PerfMarks.start(mark);
    const result = PerfMarks.end('this-mark-does-not-exist');

    expect(result).toEqual({});
  });

  it('should return user timing information if user finishes mark', () => {
    const mark = 'mark';

    jest.spyOn(performance, 'getEntriesByName').mockImplementation(() => []);
    PerfMarks.start(mark);
    const result = PerfMarks.end('this-mark-does-not-exist');

    expect(result).toEqual({});
  });

  it('should return `isPerformanceObservableSupported` value as `true` if PerformanceObservable API is available', () => {
    expect(PerfMarks.isPerformanceObservableSupported).toBeTruthy();
  });
});
