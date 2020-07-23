jest.doMock('../is-user-timing-api-supported', () => ({
  isUserTimingAPISupported: false,
}));

import { getNavigationMarker } from '../entrypoints/entries';

describe('PerfMarks navigation: User timing API NOT is available', () => {
  beforeEach(() => {
    jest.spyOn(performance, 'getEntriesByType');
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should return empty object if user navigation timing information entry is not available', () => {
    expect(getNavigationMarker()).toEqual({});
    expect(performance.getEntriesByType).not.toHaveBeenCalled();
  });
});
