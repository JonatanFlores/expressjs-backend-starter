import { Router } from 'express';
import multer from 'multer';

import storageConfig from '@config/storage';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const router = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(storageConfig.multer);

router.post('/', usersController.create);

router.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default router;
