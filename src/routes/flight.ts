import { Router } from 'express';

import { PATH_FLIGHT } from '../constants/paths';
import { getFlights } from '../controllers/flight';

const flightRouter: Router = Router();

flightRouter.get(`${PATH_FLIGHT}`, getFlights);

export default flightRouter;
