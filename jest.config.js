const { defaults } = require('jest-config');

// module.exports = {
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
//   testPathIgnorePatterns: [
//     'cypress',
//   ],
//   transform: {
//     '^.+\\.vue$': 'vue-jest',
//     '^.+\\.ts?$': 'ts-jest',
//     '^.+\\.jsx?$': 'babel-jest',
//   },
// };

module.exports = {
  globals: {
    __DEV__: true,
  },
  verbose: false,
  bail: false,
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
  // testRegex: './__unit__/.*.js$',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  rootDir: '.',
  testPathIgnorePatterns: [
    '<rootDir>/components/coverage/',
    '<rootDir>/test/cypress/',
    '<rootDir>/test/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'json', 'vue'],
  transformIgnorePatterns: [
    'node_modules/core-js',
    'node_modules/babel-runtime',
    'node_modules/vue',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
};
