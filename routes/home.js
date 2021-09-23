const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {

    const queryString = `SELECT *
    FROM products
    WHERE sold_date IS NULL
    ORDER BY name`;

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

  router.post("/favorites/:id", (req, res) => {

    const queryString = `
    INSERT INTO favorites (user_id, product_id)
    VALUES ($1, $2)
    `;

    const currentUser = req.session.user_id;
    const favoriteItem = req.params.id;

    const val = [currentUser, favoriteItem];

    db.query(queryString, val)
    .then(() => {
      res.redirect('/favorites');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  });

  router.get("/DESC", (req, res) => {

    const queryString = `SELECT name, description, thumbnail_photo, price
    FROM products
    WHERE sold_date IS NULL
    ORDER BY price DESC;`;

    db.query(queryString)
      .then(data => {
        const products = data.rows;
        console.log(data.rows)
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


  router.get("/ASC", (req, res) => {

    const queryString = `SELECT name, description, thumbnail_photo, price
    FROM products
    WHERE sold_date IS NULL
    ORDER BY price;`;

    db.query(queryString)
      .then(data => {
        const products = data.rows;
        console.log(data.rows)
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
