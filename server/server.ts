/* tslint:disable:no-console */
import { url } from "@config/api-routes";
import { MONGO_URL } from "@config/db/db";
import webpackConfig from "@config/webpack.dev";
import * as historyApiFallback from "connect-history-api-fallback";
import { Errback, Request, Response } from "express";
import * as express from "express";
import * as mongoose from "mongoose";
import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackDevServer from "webpack-dev-server";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import { useApi } from "./routes/routes-api";

const isDev: boolean = false; //process.env.NODE_ENV !== `production`;
const port = process.env.PORT || 5000;

mongoose.connect(
  MONGO_URL,
  {useNewUrlParser: true},
  (error: mongoose.Error) => {
    if (error) {
      throw error;
    }
    console.log(`Successfully connected`);
  },
);
(mongoose as any).Promise = global.Promise;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

useApi(app);

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

app.listen(port, () => {
  console.info(`>>> 🌎 Open https://${url}:%s/ in your browser.`, port);
});
export default app;
