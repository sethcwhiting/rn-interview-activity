/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
  ]
};

module.exports = config;
