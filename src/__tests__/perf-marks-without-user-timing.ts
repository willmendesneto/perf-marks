jest.doMock('../is-user-timing-api-supported', () => ({
  isUserTimingAPISupported: false,
}));

import * as PerfMarks from '../perf-marks';

describe('PerfMarks: User timing API is NOT available', () => {
  beforeEach(() => {
    spyOn(Date, 'now').and.callThrough();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should use `performance.mark` if user calls start mark', () => {
    const mark = 'mark';
    PerfMarks.start(mark);
    expect(Date.now).toHaveBeenCalled();
  });

  it('should remove markers and measures if `clear` is called', () => {
    const mark = 'mark';
    PerfMarks.start(mark);
    PerfMarks.clear(mark);
  });

  it('should remove all markers and measures if `clearAll` is called', () => {
    PerfMarks.start('mark-1');
    PerfMarks.start('mark-2');

    PerfMarks.clearAll();
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
});
