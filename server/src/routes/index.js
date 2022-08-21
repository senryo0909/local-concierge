import express from 'express';

const router = express.Router().get('/', (_, res, next) => {
  try {
    res.render('./pages/index', {
      meta: { desc: 'Demo desc', title: 'Demo title' },
      title: 'Express Demo',
    });
  } catch (_) {
    next(res.status(400));
  }
});

export default router;
