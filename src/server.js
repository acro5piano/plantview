const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { info, error } = require('./util')

const DEFAULT_PORT = 9292

function startServer({ umlFilePath, maybePort }) {
  const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'client.js'),
    module: {
      rules: [
        {
          test: /\.uml/i,
          use: path.resolve(__dirname, '../node_modules/raw-loader'),
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.UML_FILE_PATH': JSON.stringify(umlFilePath),
        'process.env.UML_PORT': JSON.stringify(8080),
      }),
    ],
  }

  const options = {
    hot: true,
    open: true,
    quiet: true,
    noInfo: true,
    stats: 'none',
  }

  const port = maybePort || DEFAULT_PORT

  const server = new WebpackDevServer(webpack(config), options)

  return new Promise(resolve => {
    server.listen(port, '0.0.0.0', function (err) {
      if (err) {
        error(err)
      }
      info(`Listening at http://localhost:${port}`)
      resolve()
    })
  })
}

module.exports = { startServer }
