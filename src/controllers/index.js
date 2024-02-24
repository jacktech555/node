const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
  res.send(`Your Email Is: umang`);
});
// const requireAuth = require('../middleware/requireAuth');

// router.use('/user', require('./user'));
// router.use('/', requireAuth, require('./root'));
module.exports = router;
