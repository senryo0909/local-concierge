import { join } from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import helmet from 'helmet';
import createHttpError from 'http-errors';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import indexRouter from './routes/index';

const CORS_OPTION = {
  origin: 'http://server:3005',
};

const VIEW_PATH = join(__dirname.replace('dist', 'src'), 'resources', 'views');

const handleHttpError = (err, _, __, next) => {
  next(createHttpError(err?.statusCode || 500));
};

const handleError = (err, req, res, next) => {
  const status = err?.statusCode || 500;
  const message = err?.message || '';

  res.status(status).render('./pages/error', {
    message: message,
    error: req.app.get('env') === 'development' ? err : {},
    meta: { desc: null, title: `${status} ${message}` },
  });

  next();
};

const app = express();

if (process.env.NODE_ENV === 'development') {
  const config = require('../webpack/dev/config.client.js');
  const compiler = webpack(config);

  app
    .use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
      }),
    )
    .use(webpackHotMiddleware(compiler));
}

app
  // view engine setup
  .set('views', VIEW_PATH)
  .set('view engine', 'ejs')
  .use(expressEjsLayouts)
  .set('layout', 'layouts/layout')
  // security
  .use(helmet())
  // use core middleware
  .use(cors(CORS_OPTION))
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(join(__dirname, 'public')))
  .use(morgan('dev'))
  // use router
  .use('/', indexRouter)
  // catch 404 and forward to error handler
  .use(handleHttpError)
  // error handler
  .use(handleError);

export default app;
