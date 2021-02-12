module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
    },
  },
  automock: false,
  cacheDirectory: '<rootDir>/.jest',
  collectCoverage: true,
  roots: ['src'],
  collectCoverageFrom: ['**/src/*.ts', '!src/index.ts', '!src/user-timing-api-resolver.ts'],
  coverageThreshold: {
    global: {
      branches: 74,
      functions: 66,
      lines: 87,
      statements: 87,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/scripts/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
