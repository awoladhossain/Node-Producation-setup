import express, { Application } from 'express';
import path from 'path';
import router from './router/api.router';
const app: Application = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

// routes
app.use('/api/v1', router);

export default app;
