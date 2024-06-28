/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'
import path from 'path'

const config: Config = {

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules'
  ],
  modulePaths: [
    '<rootDir>src'
  ],

  // The root directory that Jest should scan for tests and modules within
  rootDir: '../../',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],

  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
  },

  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts']

}

export default config
