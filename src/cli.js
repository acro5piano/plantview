const path = require('path')
const { Select } = require('enquirer')
const execa = require('execa')
const argv = require('yargs').argv
const { startServer } = require('./server')
const { info, error } = require('./util')

async function run() {
  const relativeUmlFilePath = argv._[0]
  if (!relativeUmlFilePath) {
    error('Please specify uml file name')
    return
  }
  const umlFilePath = path.resolve(process.cwd(), relativeUmlFilePath)

  info(`Starting ${umlFilePath}...`)

  const maybePort = argv.port

  info('Starting the dev web server...')

  const output = await execa('docker', ['images'])
  const hasPlantuml = output.stdout.includes('plantuml/plantuml-server')

  if (!hasPlantuml) {
    try {
      const answer = await new Select({
        message: 'Plantview will pull plantuml/plantuml-server docker image. Do you agree this?',
        choices: ['Yes', 'No'],
      }).run()
      if (answer !== 'Yes') {
        throw new Error()
      }
    } catch {
      info('Sorry, we could not help you')
      process.exit(1)
      return
    }
  }

  Promise.all([
    execa('docker', ['run', '-p', '8080:8080', 'plantuml/plantuml-server:jetty']),
    startServer({ umlFilePath, maybePort }),
  ])
}

module.exports = { run }
