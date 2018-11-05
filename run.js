require('babel-register')({});
const path = require('path');

const runCli = require('./packages/jest-cli/src/jest').runCLI;
const config = {testMatch: ["**/example.test.js"]};
config.updateSnapshot = true;
console.log(runCli(config, [path.resolve(__dirname, '.')]));
