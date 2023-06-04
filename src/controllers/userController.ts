import argon2 from 'argon2';
import { NextFunction, Request, Response } from 'express';

import { ERROR_MESSAGES } from '../constants/apiMessages';
import { HTTP_STATUS, HTTP_STATUS_CODE } from '../constants/httpCodes';
import { User } from '../entities/user';
import { createAccessToken, sendAccessToken } from '../utils/auth';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      status: HTTP_STATUS.ERROR,
      message: ERROR_MESSAGES.CREATE_USER_FIELDS_REQUIRED,
    });
    return;
  }

  try {
    const userExist = await User.findOneBy({ email });

    if (userExist) {
      res.status(HTTP_STATUS_CODE.CONFLICT).json({
        status: HTTP_STATUS.ERROR,
        message: ERROR_MESSAGES.USER_EXIST,
      });
      return;
    }

    const hashedPassword = await argon2.hash(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    }).save();

    const accessToken = createAccessToken(user);
    sendAccessToken(res, accessToken);

    res.json({
      status: HTTP_STATUS.SUCCESS,
      data: {
        userId: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
