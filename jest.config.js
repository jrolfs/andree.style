const { pathsToModuleNameMapper } = require('@hover/javascript/api/test');
const config = require('@hover/javascript/jest');

const { compilerOptions } = require('./tsconfig');

module.exports = {
  ...config,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
};
