import { Router } from 'express';

import { PATH_RESERVATION } from '../constants/paths';
import { createReservation, getReservations } from '../controllers/reservation';
// import { authChecker } from '../middlewares/authChecker';

const reservationRouter: Router = Router();

// reservationRouter.use(authChecker); NO LO PUSE A FUNCINAR POR MOTIVO DE TIEMPO

reservationRouter.get(PATH_RESERVATION, getReservations);

reservationRouter.post(PATH_RESERVATION, createReservation);

export default reservationRouter;
