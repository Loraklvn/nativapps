import { Response } from 'express';
import { sign } from 'jsonwebtoken';

import { COOKIES } from '../constants';
import { User } from '../entities/user';

export const createAccessToken = (user: User): string => {
  return sign(
    {
      userId: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET || '',
    {
      expiresIn: '1d',
    },
  );
};

export const sendAccessToken = (res: Response, token: string): void => {
  res.cookie(COOKIES.ACCESS_TOKEN_COOKIES_NAME, token, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
};
