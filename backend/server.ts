import express, { Express, Response, Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! From Typescript TESTING!');
});

interface Item {
  name: string;
  category: string;
  isComplete: boolean;
  createDatetime?: Date;
}
app.get('/test', (req: Request, res: Response) => {
  const test: Item[] = [
    { name: 'Apples', category: 'Produce', isComplete: false },
    { name: 'Bananas', category: 'Produce', isComplete: true },
    { name: 'Peaches', category: 'Produce', isComplete: false },
    { name: 'Donuts', category: 'Bakery', isComplete: false },
  ];

  res.send(test);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
