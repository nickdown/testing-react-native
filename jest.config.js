module.exports = {
    preset: "react-native",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
    // moduleDirectories: ["node_modules", "src"],
    // transform: {
    //     "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    // },
    // transformIgnorePatterns: ["node_modules/(?!@react-native|react-native)"],
};