/** @type {import('jest').Config} */
const config = {
    verbose: true,
    preset: 'jest-expo',
    setupFilesAfterEnv: ['./jest-setup.ts'],
};

module.exports = config;
