const router = require('express').Router();
// const { Project } = require('../../models');
const Auth = require('../../utils/auth');

router.post('/', Auth, async (req, res) => {
  try {

  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
