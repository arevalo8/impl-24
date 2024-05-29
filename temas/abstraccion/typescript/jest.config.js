// jest.config.js

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
  };
  