import { Router } from 'express';

import { PATH_USER } from '../constants/paths';
import { login, signup } from '../controllers/userController';

const userRouter: Router = Router();

userRouter.post(`${PATH_USER}/login`, login);

userRouter.post(`${PATH_USER}/signup`, signup);

export default userRouter;
