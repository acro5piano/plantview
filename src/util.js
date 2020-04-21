const chalk = require('chalk')

function info(text) {
  console.log(chalk.blue(`[info] ${text}`))
}

function error(text) {
  console.log(chalk.red(`[error] ${text}`))
  process.exit(1)
}

module.exports = {
  info,
  error,
}
