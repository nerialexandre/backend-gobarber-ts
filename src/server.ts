import express from 'express';
import setupRoutes from './config/routes';

const app = express();

app.use(express.json());

setupRoutes(app);

app.listen(5000, () => {
  console.log('🚀️ Backend started!');
});

export default app;
