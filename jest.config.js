const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: './spec/.+\\.ts$',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  moduleFileExtensions: ['ts', 'js', 'json'],
  "roots": [
    "<rootDir>/spec"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/loadEnv.ts"
  ]
};