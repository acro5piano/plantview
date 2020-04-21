const path = require('path')
const prompts = require('prompts')
const execa = require('execa')
const argv = require('yargs').argv
const { startServer } = require('./server')
const { info, error } = require('./util')

function run() {
  const relativeUmlFilePath = argv._[0]
  if (!relativeUmlFilePath) {
    error('Please specify uml file name')
    return
  }
  const umlFilePath = path.resolve(process.cwd(), relativeUmlFilePath)

  info(`Starting ${umlFilePath}...`)

  const maybePort = argv.port

  info('Starting the dev web server...')

  Promise.all([
    execa('docker', ['run', '-p', '8080:8080', 'plantuml/plantuml-server:jetty']),
    startServer({ umlFilePath, maybePort }),
  ])
}

module.exports = { run }
