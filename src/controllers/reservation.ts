import { NextFunction, Response } from 'express';

import { ERROR_MESSAGES } from '../constants/apiMessages';
import { HTTP_STATUS, HTTP_STATUS_CODE } from '../constants/httpCodes';
import { appDataSource } from '../data-source';
import { Reservation } from '../entities/reservation';
import { CustomRequest } from '../types/indexl';

export const createReservation = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { flightId } = req.body;

  try {
    const userId = req?.user?.userId || '';
    const parsedUserId = parseInt(userId);
    const parseFlightId = parseInt(flightId);
    if (!parsedUserId || !parseFlightId) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
        status: HTTP_STATUS.ERROR,
        message: ERROR_MESSAGES.RESERVATION_BODY_NOT_VALID,
      });
      return;
    }

    await appDataSource
      .getRepository(Reservation)
      .create({ user_id: parsedUserId, flight_id: parseFlightId })
      .save();

    res.json({
      status: HTTP_STATUS.SUCCESS,
      data: true,
    });
  } catch (error) {
    next(error);
  }
};
