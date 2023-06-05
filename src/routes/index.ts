import { Router } from 'express';

import flightRouter from './flight';
import reservationRouter from './reservation';
import userRouter from './user';

const routers = [userRouter, flightRouter, reservationRouter];

const mainRouter = Router();

mainRouter.use(routers);

export default mainRouter;
