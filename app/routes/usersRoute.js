import express from 'express';

import { createUser, siginUser, searchFirstnameOrLastname } from '../controllers/usersController';

const router = express.Router();

router.post('/auth/signup', createUser);
router.post('/auth/signin', siginUser);
// router.get('/users/first_name', searchFirstnameOrLastname);

export default router;