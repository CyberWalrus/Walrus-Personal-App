const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)
module.exports = {
  transform: {
    "^.+\\.tsx?|ts?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`
  },
  testRegex: `.test.(js?|jsx?|tsx?|ts?)$`,
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  preset: 'ts-jest',
  moduleNameMapper
};
