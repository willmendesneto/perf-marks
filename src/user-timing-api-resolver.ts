import { isNodeJSEnv } from './is-nodejs-env';

if (isNodeJSEnv && !(global as any).PerformanceObserver && !(global as any).performance) {
  /**
   * Requires a module which is protected against bundler minification.
   *
   * @param request The module path to resolve
   */
  const dynamicRequire = (mod: { require: (r: string) => any }, request: string): any => {
    return mod.require(request);
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PerformanceObserver, performance } = dynamicRequire(module, 'perf_hooks');

    (global as any).PerformanceObserver = PerformanceObserver;
    (global as any).performance = performance;
  } catch (error) {
    throw new Error(`Your NodeJS application doesn't support perf_hooks. ${error}`);
  }
}
