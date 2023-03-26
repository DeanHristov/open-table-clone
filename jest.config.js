module.exports = () => ({
    testEnvironment: "jsdom",

    // coverageThreshold: {
    //     global: {
    //         branches: 80,
    //         functions: 80,
    //         lines: 80,
    //         statements: -10,
    //     },
    // },

    roots: [
        "<rootDir>/components/",
        // "<rootDir>/ctx/",
        // "<rootDir>/hooks/"
    ],
    testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
    ],
    setupFiles: ["dotenv/config"],
    testPathIgnorePatterns: [
        "/.next/",
        "/node_modules/",
        "/test/e2e/",
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", {presets: ["next/babel"]}],
    },
    transformIgnorePatterns: [
        "/node_modules/",
    ],
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
        "next/router": "<rootDir>/test/__mocks__/router-mock.js",
    },
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
});
