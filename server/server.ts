import * as express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.static(`dist/`));
app.get(`*`, (req: Request, res: Response) => {
  res.sendFile(`dist/index.html`);
  res.end();
});

app.listen(3000, (): void => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port 3000!");
});
