const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {

    const queryString = `SELECT *
    FROM products
    WHERE sold_date IS NULL
    ORDER BY name`;

    const currentUser = req.session.user_id;

    db.query(queryString)
      .then(data => {
        const products = data.rows;

        const templateVars = {
          products,
          currentUser
        };

        res.render("index", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:id", (req, res) => {

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

  router.get("/desc", (req, res) => {

    const queryString = `SELECT *
    FROM products
    WHERE sold_date IS NULL
    ORDER BY price DESC;`;

    const currentUser = req.session.user_id

    db.query(queryString)
      .then(data => {
        const products = data.rows;
        console.log(data.rows)
        const templateVars = {
          products,
          currentUser
        };

        res.render("index", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.get("/asc", (req, res) => {

    const queryString = `SELECT *
    FROM products
    WHERE sold_date IS NULL
    ORDER BY price;`;

    const currentUser = req.session.user_id

    db.query(queryString)
      .then(data => {
        const products = data.rows;
        const templateVars = {
          products,
          currentUser
        };

        res.render("index", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/conversations/:id", (req, res) => {

    const userId = req.session.user_id;
    const product = req.params.id;

    const queryString = `
    SELECT user_id
    FROM products
    WHERE id = $1
    `;

    const queryString2 = `
    INSERT INTO conversations (product_id, user_id, seller_id)
    VALUES ($1, $2, $3) RETURNING *
    `;

    const queryString3 = `
    INSERT INTO messages (message, conversation_id, sender_id)
    VALUES ('Im interested in this product.', $1, $2)
    `;

    const val = [product]


    db.query(queryString, val)
    .then(data => {
      const info = data.rows;
      const user = info[0].user_id;

      const val2 = [product, userId, user];

      return db.query(queryString2, val2);
    })
    .then(data => {
      const convo = data.rows;
      const id = convo[0].id;

      const val3 = [id, userId];

      return db.query(queryString3, val3);
    })
    .then(() => {
      res.redirect("/conversations");
    })
    .catch(err => {
      console.log("err:", err);
    })
  })

  return router;
};
