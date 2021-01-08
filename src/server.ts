import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import helmet from 'helmet';
import setupRoutes from './config/routes';

import ErrorsMiddlewere from './middlewares/errosMiddlewere';
import './config/database/index';

const app = express();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Shari
app.use(cors());

setupRoutes(app);

app.use(ErrorsMiddlewere);

app.listen(5000, () => {
  console.log('🚀️ Backend started!');
});

export default app;
