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
  collectCoverageFrom: ['**/src/*.ts'],
  coverageThreshold: {
    global: {
      branches: 57,
      functions: 100,
      lines: 80,
      statements: 82,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/scripts/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
