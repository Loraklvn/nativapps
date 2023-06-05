import { Request } from 'express';

export interface UserPayload {
  userId: string;
  name: string;
  email: string;
}

export interface CustomRequest extends Request {
  user?: UserPayload;
}
