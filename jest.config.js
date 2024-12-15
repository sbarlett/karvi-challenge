/** @type {import('jest').Config} */
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  maxWorkers: "50%",
  testTimeout: 10000,
  maxConcurrency: 3,
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7).*/"],
  transform: {
    "^.+\\.(ts|tsx|js)$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },
};