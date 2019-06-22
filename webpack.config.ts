import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const root = (args: string): string => {
  return path.join.apply(path, [__dirname].concat(`./`, args));
};

const webpackConfig: webpack.Configuration = {
  entry: root(`client/index.tsx`),
  output: {
    filename: `bundle.js`,
    path: root(`dist/`),
  },
  // tslint:disable-next-line:object-literal-sort-keys
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    // tslint:disable-next-line:object-literal-sort-keys
    compress: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        // tslint:disable-next-line:object-literal-sort-keys
        exclude: /node_modules/,
        loader: [`babel-loader`, `ts-loader`],
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
    // tslint:disable-next-line:object-literal-sort-keys
    alias: {
      client: root(`client/`),
      server: root(`server/`),
      // tslint:disable-next-line:object-literal-sort-keys
      dist: root(`dist/`),
    },
  },
  devtool: `source-map`,
};

export default webpackConfig;
