// const { resolve } = require('path');

const args = require('minimist')(process.argv.slice(2))
const path = require('path');

process.env.REACT_WEBPACK_ENV = args.env.NODE_ENV
const configs = {
  dev: require(path.join(__dirname, 'config/webpack/dev')),
  prod: require(path.join(__dirname, 'config/webpack/prod'))
}

module.exports = env => {
  console.log('NODE_ENV: ', env.NODE_ENV)
  return configs[env.NODE_ENV]
}
