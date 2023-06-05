import { Router } from 'express';

import airportRouter from './airport';
import flightRouter from './flight';
import reservationRouter from './reservation';
import userRouter from './user';

const routers = [userRouter, airportRouter, flightRouter, reservationRouter];

const mainRouter = Router();

mainRouter.use(routers);

export default mainRouter;
