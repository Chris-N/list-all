import express, { Express, Response, Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! From Typescript TESTING!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
