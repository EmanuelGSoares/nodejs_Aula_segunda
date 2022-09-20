import { Router, Request, Response, NextFunction } from 'express';
//forma de configurar rotas no express

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Emanuel' }];
  console.log(users[0].userName);
  res.status(200).send({ users });
});

export default usersRoute;
