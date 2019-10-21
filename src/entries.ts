import { isUserTimingAPISupported } from './is-user-timing-api-supported';

const getEntriesByType = (entryName: string): PerformanceNavigationTiming[] => {
  if (!isUserTimingAPISupported) {
    return [];
  }

  return (performance.getEntriesByType(entryName) as PerformanceNavigationTiming[]) || [];
};

const getNavigationMarker = (): PerformanceNavigationTiming | { [key: string]: any } =>
  getEntriesByType('navigation').pop() || {};

export { getNavigationMarker };
