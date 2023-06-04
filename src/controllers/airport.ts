import { NextFunction, Request, Response } from 'express';

import { HTTP_STATUS } from '../constants/httpCodes';
import { Airport } from '../entities/airport';

export const getAirportList = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const airportList = await Airport.find();

    res.json({
      status: HTTP_STATUS.SUCCESS,
      data: {
        total: airportList.length,
        list: airportList,
      },
    });
  } catch (error) {
    next(error);
  }
};
