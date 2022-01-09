const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.sendStatus(404).end();
});

module.exports = router;