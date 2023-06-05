import { NextFunction, Request, Response } from 'express';

import { MAX_PAGE_SIZE } from '../constants';
import { ERROR_MESSAGES } from '../constants/apiMessages';
import { flightCoulumns } from '../constants/columns';
import { HTTP_STATUS, HTTP_STATUS_CODE } from '../constants/httpCodes';
import { appDataSource } from '../data-source';
import { Flight } from '../entities/flight';
import { validatePageParams, validateSortParams } from '../utils';

export const getFlights = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const {
      page = 1,
      pageSize = 10,
      origin,
      destination,
      sortBy,
      sortOrder,
    } = req.query;

    const parsedPage = parseInt(page as string, 10);
    const parsedPageSize = parseInt(pageSize as string, 10);

    if (validatePageParams(parsedPage, parsedPageSize)) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
        status: HTTP_STATUS.ERROR,
        message: ERROR_MESSAGES.PAGE_PAGESIZE_NOT_VALID,
      });
      return;
    }

    const areSortParamsValid = validateSortParams(
      sortBy as string,
      sortOrder as string,
    );

    if (!areSortParamsValid) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
        status: HTTP_STATUS.ERROR,
        message: ERROR_MESSAGES.SORT_FIELDS_NOT_VALID,
      });
      return;
    }

    const validatedPageSize = Math.min(parsedPageSize, MAX_PAGE_SIZE);

    const queryBuilder = appDataSource
      .getRepository(Flight)
      .createQueryBuilder('flight')
      .select(flightCoulumns)
      .leftJoin('flight.origin_airport', 'o')
      .leftJoin('flight.destination_airport', 'd')
      .skip((parsedPage - 1) * validatedPageSize)
      .take(validatedPageSize);

    if (areSortParamsValid) {
      queryBuilder.orderBy(`flight.${sortBy}`, sortOrder as 'ASC');
    }

    if (parseInt(origin as string)) {
      queryBuilder.andWhere('flight.origin = :originId', {
        originId: parseInt(origin as string),
      });
    }

    if (parseInt(destination as string)) {
      queryBuilder.andWhere('flight.destination = :destinationId', {
        destinationId: parseInt(destination as string),
      });
    }

    const [flights, total] = await queryBuilder.getManyAndCount();

    res.json({
      status: HTTP_STATUS.SUCCESS,
      data: {
        total,
        pageSize,
        currentPage: page,
        totalPages: parseInt(`${Math.ceil(total / validatedPageSize)}`),
        flights,
      },
    });
  } catch (error) {
    next(error);
  }
};
