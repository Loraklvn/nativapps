import { Router } from 'express';

import { PATH_USER } from '../constants/paths';
import { signup } from '../controllers/userController';

const userRouter: Router = Router();

userRouter.post(`${PATH_USER}/signup`, signup);

export default userRouter;
