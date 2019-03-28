const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    server: "./server.ts",
    renderer: "./renderer.ts",
  },
  resolve: {extensions: [".js", ".ts"]},
  target: "node",
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: "ts-loader"},
    ]
  }
}
