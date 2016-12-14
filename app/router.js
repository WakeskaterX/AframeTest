let router = require('express').Router();

const debug = require('debug')('aframe:router');

/**
 * Debugging Middleware
 */
router.use((req, res, next) => {
  debug(`recieved request for ${req.method} ${req.path} from ${req.ip}`);
  return next();
});

router.get('/', (req, res) => res.render('index'));

module.exports = router;
