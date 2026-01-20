import express from 'express';
import apiController from '../controller/api.controller';
const router = express.Router();

router.route('/self').get(apiController.self);

export default router;
