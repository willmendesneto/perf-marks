import { isNodeJSEnv } from './is-nodejs-env';

if (isNodeJSEnv && !(global as any).PerformanceObserver && !(global as any).performance) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PerformanceObserver, performance } = require('perf_hooks');

    (global as any).PerformanceObserver = PerformanceObserver;
    (global as any).performance = performance;
  } catch (error) {
    throw new Error(`Your NodeJS application doesn't support perf_hooks. ${error}`);
  }
}
