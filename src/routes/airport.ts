import { Router } from 'express';

import { PATH_AIRPORT } from '../constants/paths';
import { getAirportList } from '../controllers/airport';

const airportRouter: Router = Router();

airportRouter.get(`${PATH_AIRPORT}`, getAirportList);

export default airportRouter;
