import { NextFunction, Response } from 'express';

import { ERROR_MESSAGES } from '../constants/apiMessages';
import { reservationColumns } from '../constants/columns';
import { HTTP_STATUS, HTTP_STATUS_CODE } from '../constants/httpCodes';
import { appDataSource } from '../data-source';
import { Reservation } from '../entities/reservation';
import { CustomRequest } from '../types/indexl';

export const getReservations = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req?.user?.userId || '';
    const parsedUserId = parseInt(userId);

    if (!parsedUserId) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
        status: HTTP_STATUS.ERROR,
        message: ERROR_MESSAGES.USER_NOT_FOUND,
      });
      return;
    }

    const reservations = await appDataSource
      .getRepository(Reservation)
      .createQueryBuilder('r')
      .select(reservationColumns)
      .leftJoin('r.flight', 'f')
      .where('r.user_id = :userId', { userId: parsedUserId })
      .andWhere('r.status = "P"')
      .getMany();

    res.json({
      status: HTTP_STATUS.SUCCESS,
      data: {
        total: reservations.length,
        reservations,
      },
    });
  } catch (error) {
    next(error);
  }
};

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
