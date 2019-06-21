const path = require(`path`);

module.exports = {
  entry: `./client/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `dist`)
  },
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    compress: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: [`babel-loader`, `ts-loader`]
      }
    ]
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
    alias: {
      client: path.resolve(__dirname, "client/"),
      server: path.resolve(__dirname, "server/"),
      dist: path.resolve(__dirname, "dist/")
    }
  },
  devtool: `source-map`
};
