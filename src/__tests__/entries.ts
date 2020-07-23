jest.doMock('../is-nodejs-env', () => ({
  isNodeJSEnv: false,
}));

import { getNavigationMarker } from '../entrypoints/entries';

describe('PerfMarks navigation: User timing API is available', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should return user navigation timing information', () => {
    const navigationTiming: PerformanceNavigationTiming = {
      toJSON: () => null,
      domComplete: 1,
      domContentLoadedEventEnd: 2,
      domContentLoadedEventStart: 3,
      domInteractive: 4,
      loadEventEnd: 5,
      loadEventStart: 6,
      redirectCount: 6,
      type: 'navigate',
      unloadEventEnd: 7,
      unloadEventStart: 8,
      connectEnd: 9,
      connectStart: 10,
      decodedBodySize: 11,
      domainLookupEnd: 12,
      domainLookupStart: 13,
      encodedBodySize: 14,
      fetchStart: 15,
      initiatorType: 'initiatorType',
      nextHopProtocol: 'nextHopProtocol',
      redirectEnd: 16,
      redirectStart: 17,
      requestStart: 18,
      responseEnd: 19,
      responseStart: 20,
      secureConnectionStart: 21,
      transferSize: 22,
      workerStart: 23,
      duration: 24,
      startTime: 25,
      entryType: '',
      name: '',
    };

    jest
      .spyOn(performance, 'getEntriesByType')
      .mockImplementation((): PerformanceNavigationTiming[] => [navigationTiming]);

    expect(getNavigationMarker()).toEqual(navigationTiming);

    expect(performance.getEntriesByType).toHaveBeenLastCalledWith('navigation');
  });
});
