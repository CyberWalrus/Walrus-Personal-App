/* tslint:disable:object-literal-sort-keys */
import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";

const root = (args: string): string => {
  return path.join.apply(path, [__dirname].concat(`./`, args));
};

const webpackConfig: webpack.Configuration = {
  entry: {
    bundle: [root(`client/index.tsx`), root(`client/style/style.scss`), root(`client/style/normalize.scss`)],
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
      {
        test: /\.scss$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `css/[name].css`,
            },
          },
          {
            loader: `extract-loader`,
          },
          {
            loader: `css-loader?-url`,
          },
          {
            loader: `postcss-loader`,
          },
          {
            loader: `sass-loader`,
            options: {
              includePaths: [
                path.resolve(__dirname, `./node_modules/compass-mixins/lib`),
              ],
            },
          },
        ],
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
  devtool: `source-map`,
};

export default webpackConfig;
