import { Router } from 'express';

import { PATH_RESERVATION } from '../constants/paths';
import { createReservation } from '../controllers/reservation';
import { authChecker } from '../middlewares/authChecker';

const reservationRouter: Router = Router();

reservationRouter.use(authChecker);

reservationRouter.post(PATH_RESERVATION, createReservation);

export default reservationRouter;
