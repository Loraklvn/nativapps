import { Router } from 'express';

import userRouter from './user';

const routers = [userRouter];

const mainRouter = Router();

mainRouter.use(routers);

export default mainRouter;
