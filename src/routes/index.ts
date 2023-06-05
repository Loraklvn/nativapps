import { Router } from 'express';

import airportRouter from './airport';
import flightRouter from './flight';
import userRouter from './user';

const routers = [userRouter, airportRouter, flightRouter];

const mainRouter = Router();

mainRouter.use(routers);

export default mainRouter;
