import { Router } from 'express';

import airportRouter from './airport';
import userRouter from './user';

const routers = [userRouter, airportRouter];

const mainRouter = Router();

mainRouter.use(routers);

export default mainRouter;
