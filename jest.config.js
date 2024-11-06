module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
  testMatch: ["<rootDir>/src/app/**/*.spec.ts"],
  transform: {
    "^.+\\.(ts|mjs|js|html|json)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
};
