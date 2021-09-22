const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `SELECT name, description, thumbnail_photo, price
    FROM products
    WHERE sold_date IS NULL
    ORDER BY name`;
    console.log(queryString);
    db.query(queryString)
      .then(data => {
        const products = data.rows;

        const templateVars = {
          products
        };

        res.render("index", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
