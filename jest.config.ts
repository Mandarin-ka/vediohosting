import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|style)$':
      '<rootDir>/node_modules/identity-obj-proxy',
  },
};

export default config;
