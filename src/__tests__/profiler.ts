jest.doMock('../is-user-timing-api-supported', () => ({
  isUserTimingAPISupported: true,
}));

import { profiler } from '../entrypoints/profiler';

const testFunction = () => 1 + 1;

const markProfiler = 'mark-profiler';

describe('PerfMarks: User timing API is NOT available', () => {
  beforeEach(() => {
    spyOn(Date, 'now').and.callThrough();
    spyOn(performance, 'now').and.callThrough();
    spyOn(performance, 'mark');
    spyOn(performance, 'measure');
    spyOn(performance, 'clearMarks');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should run profile if receives callback as sync function', async () => {
    const result = await profiler(() => testFunction(), markProfiler);

    expect(result.data).toEqual(2);
    expect(result.mark).toEqual(
      expect.objectContaining({
        duration: expect.any(Number),
        startTime: expect.any(Number),
        entryType: 'measure',
        name: markProfiler,
      }),
    );

    expect(performance.now).toHaveBeenCalled();
    expect(performance.mark).toHaveBeenCalled();
    expect(performance.measure).toHaveBeenCalled();
    expect(performance.clearMarks).toHaveBeenCalledWith(markProfiler);
    expect(performance.getEntriesByName(markProfiler)).toHaveLength(0);
  });

  it('should run profile if receives callback as async/await', async () => {
    const result = await profiler(async () => await testFunction(), markProfiler);

    expect(result.data).toEqual(2);
    expect(result.mark).toEqual(
      expect.objectContaining({
        duration: expect.any(Number),
        startTime: expect.any(Number),
        entryType: 'measure',
        name: markProfiler,
      }),
    );

    expect(performance.now).toHaveBeenCalled();
    expect(performance.mark).toHaveBeenCalled();
    expect(performance.measure).toHaveBeenCalled();
    expect(performance.clearMarks).toHaveBeenCalledWith(markProfiler);
    expect(performance.getEntriesByName(markProfiler)).toHaveLength(0);
  });

  it('should run profile if receives callback as promise', async function PROFILING_TEST() {
    const functionToBeProfiled = () =>
      // eslint-disable-next-line compat/compat
      new Promise(resolve => {
        return setTimeout(() => {
          resolve(testFunction());
        }, 5);
      });

    const result = await profiler(functionToBeProfiled, markProfiler);

    expect(result.data).toEqual(2);
    expect(result.mark).toEqual(
      expect.objectContaining({
        duration: expect.any(Number),
        startTime: expect.any(Number),
        entryType: 'measure',
        name: markProfiler,
      }),
    );

    expect(performance.now).toHaveBeenCalled();
    expect(performance.mark).toHaveBeenCalled();
    expect(performance.measure).toHaveBeenCalled();
    expect(performance.clearMarks).toHaveBeenCalledWith(markProfiler);
    expect(performance.getEntriesByName(markProfiler)).toHaveLength(0);
  });

  it('should not add data key in response if callback does not return value', async () => {
    const result = await profiler(() => null, markProfiler);

    expect(result.data).toEqual(undefined);
    expect(result.mark).toEqual(
      expect.objectContaining({
        duration: expect.any(Number),
        startTime: expect.any(Number),
        entryType: 'measure',
        name: markProfiler,
      }),
    );

    expect(performance.now).toHaveBeenCalled();
    expect(performance.mark).toHaveBeenCalled();
    expect(performance.measure).toHaveBeenCalled();
    expect(performance.clearMarks).toHaveBeenCalledWith(markProfiler);
    expect(performance.getEntriesByName(markProfiler)).toHaveLength(0);
  });

  it('should not add data key in response if callback does not return value', async () => {
    const functionWithError = () => {
      throw new Error('Function error');
    };

    await expect(profiler(() => functionWithError(), markProfiler)).rejects.toThrowError('Function error');
  });
});
