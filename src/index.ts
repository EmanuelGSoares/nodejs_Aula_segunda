import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'bar' });
});

app.get('', (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(301, {
    Location: "/users"
  }).end();
});

app.listen(3000, () => {
  console.log('Estou funcionando');
});
