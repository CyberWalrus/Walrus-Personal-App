/* tslint:disable:object-literal-sort-keys */
import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import commonConfig from "../webpack.config";

const root = (args: string): string => {
  return path.join.apply(path, [__dirname].concat(`../`, args));
};
const webpackConfig: webpack.Configuration = merge(commonConfig, {
  devtool: `eval-source-map`,

  mode: `development`,

  entry: {
    bundle: [`webpack-hot-middleware/client?reload=true`],
  },

  output: {
    filename: `js/[name].js`,
    chunkFilename: `js/[id].chunk.js`,
  },

  devServer: {
    contentBase: `./client`,
    historyApiFallback: true,
    stats: `minimal`, // none (or false), errors-only, minimal, normal (or true) and verbose
  },
});
export default webpackConfig;
