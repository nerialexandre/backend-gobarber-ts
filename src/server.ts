import 'reflect-metadata';
import express from 'express';
import setupRoutes from './config/routes';
import './config/database/index';

const app = express();

app.use(express.json());

setupRoutes(app);

app.listen(5000, () => {
  console.log('🚀️ Backend started!');
});

export default app;
