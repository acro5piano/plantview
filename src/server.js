const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 9292;

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "client.js"),
  module: {
    rules: [
      {
        test: /\.uml/i,
        use: "raw-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};

const options = {
  hot: true,
  open: true
};

const server = new WebpackDevServer(webpack(config), options);

function run() {
  console.log("Starting the dev web server...");

  server.listen(port, "0.0.0.0", function(err) {
    if (err) {
      console.log(err);
    }
    console.log("WebpackDevServer listening at localhost:", port);
  });
}

module.exports = { run };
