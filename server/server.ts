import webpackConfig from "@config/webpack.dev";
import * as historyApiFallback from "connect-history-api-fallback";
import * as express from "express";
import { Errback, Request, Response } from "express";
import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackDevServer from "webpack-dev-server";
import * as webpackHotMiddleware from "webpack-hot-middleware";
const app = express();
const isDev = true;
const port: number = 3000;
if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false,
    }),
  );

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, `../dist`)));
} else {
  app.use(express.static(path.resolve(__dirname, `../dist`)));
  app.get(`*`, (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, `../dist/index.html`));
    res.end();
  });
}

app.listen(port, `localhost`, (err: Errback) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  }

  // tslint:disable-next-line:no-console
  console.info(`>>> 🌎 Open http://localhost:%s/ in your browser.`, port);
});
