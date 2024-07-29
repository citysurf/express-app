import { Router } from 'express';
import * as UsersController from './users.controller';
const {ObjectId } = require('mongodb');

const router = Router();

router
    .route('/savedCities')
    .get(UsersController.getSavedCities)
router
    .route('/createUser')
    .post(UsersController.createUser);
router
    .route('/updateUser')
    .post(UsersController.updateUser);
router
    .route('/authenticateUser')
    .post(UsersController.authenticateUser)
router
    .route('/user/:id')
    .delete(UsersController.deleteUser);
router
    .route('/savedCities/:id')
    .delete(UsersController.deleteCity);

export default router;