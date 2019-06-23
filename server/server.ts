import webpackConfig from "@config/webpack.dev";
import * as historyApiFallback from "connect-history-api-fallback";
import * as express from "express";
import { Errback, Request, Response } from "express";
import * as mongoose from "mongoose";
import * as path from "path";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackDevServer from "webpack-dev-server";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import { userApi } from "./routes/api/user-api";
const isDev = true;
const port: number = 1337;

mongoose.connect(
  `mongodb+srv://walrus:ZCVL6pZjdw7q1Rbr@walrus-api-f849m.mongodb.net/test?retryWrites=true`,
  function(err) {
    if (err) {
      throw err;
    }

    console.log(`Successfully connected`);
  },
);
(mongoose as any).Promise = global.Promise;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

userApi(app);

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

export default app;