/* tslint:disable:object-literal-sort-keys */
import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const root = (args: string): string => {
  return path.join.apply(path, [__dirname].concat(`./`, args));
};

const webpackConfig: webpack.Configuration = {
  entry: {
    bundle: [root(`client/index.tsx`)],
  },
  output: {
    filename: `bundle.js`,
    path: root(`dist/`),
  },
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    compress: false,
    port: 1337,
    historyApiFallback: true,
  },
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: [`babel-loader`, `ts-loader`],
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
    alias: {
      "@client": root(`client/`),
      "@server": root(`server/`),
      "@dist": root(`dist/`),
      "@config": root(`config/`),
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: `eval-source-map`,
};

export default webpackConfig;
