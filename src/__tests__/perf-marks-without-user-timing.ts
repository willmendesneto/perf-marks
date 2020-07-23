jest.doMock('../is-user-timing-api-supported', () => ({
  isUserTimingAPISupported: false,
}));
jest.doMock('../is-performance-observable-supported', () => ({
  isPerformanceObservableSupported: false,
}));

import * as PerfMarks from '../entrypoints/marks';

describe('PerfMarks: User timing API is NOT available', () => {
  beforeEach(() => {
    spyOn(Date, 'now').and.callThrough();
    spyOn(performance, 'now').and.callThrough();
    spyOn(performance, 'mark');
    spyOn(performance, 'clearMeasures');
    spyOn(performance, 'clearMarks');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should store datetime in memory if user calls start mark', () => {
    const mark = 'mark';

    PerfMarks.start(mark);
    expect(performance.now).not.toHaveBeenCalled();
    expect(Date.now).toHaveBeenCalled();
  });

  it('should remove markers and measures if `clear` is called', () => {
    const mark = 'mark';
    PerfMarks.start(mark);
    PerfMarks.clear(mark);

    expect(performance.now).not.toHaveBeenCalled();
    expect(Date.now).toHaveBeenCalled();
    expect(performance.clearMeasures).not.toHaveBeenCalled();
    expect(performance.clearMarks).not.toHaveBeenCalledWith();
    expect(performance.getEntriesByName(mark)).toHaveLength(0);
  });

  it('should remove all markers and measures if `clearAll` is called', () => {
    PerfMarks.start('mark-1');
    PerfMarks.start('mark-2');

    PerfMarks.clearAll();

    expect(performance.now).not.toHaveBeenCalled();
    expect(Date.now).toHaveBeenCalled();
    expect(performance.clearMeasures).not.toHaveBeenCalled();
    expect(performance.clearMarks).not.toHaveBeenCalled();
    expect(performance.getEntries()).toHaveLength(0);
  });

  it('should return user timing information if user finishes mark', () => {
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

  it('should return `isPerformanceObservableSupported` value as `false` if PerformanceObservable API is NOT available', () => {
    expect(PerfMarks.isPerformanceObservableSupported).toBeFalsy();
  });
});
