const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/:id', (req, res) => {
    // installed cookie session and set the cookie
    req.session.user_id = req.params.id;
    // redirect to home
    res.redirect('/');
  });

  return router;
};
