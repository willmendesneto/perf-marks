module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
    },
  },
  automock: false,
  cacheDirectory: '<rootDir>/.jest',
  collectCoverage: true,
  roots: ['src'],
  collectCoverageFrom: ['**/src/*.ts', '!src/index.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 92,
      statements: 82,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/scripts/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
