const { query } = require('express');
const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `SELECT products.id, products.name, description, thumbnail_photo, price
    FROM products
    JOIN favorites ON product_id = products.id
    JOIN users ON favorites.user_id = users.id
    WHERE sold_date IS NULL AND users.id = $1
    ORDER BY price;
    `;
    const user_id = req.session.user_id;

    const val = [user_id];

    db.query(queryString, val)
      .then(data => {
        const products = data.rows;
        const templateVars = {
          products
        };

        res.render("favorites", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/delete/:id", (req,res) => {

    const user_id = req.session.user_id;
    const removeItem = req.params.id;

    const queryString = `
    DELETE FROM favorites
    WHERE user_id = $1 AND product_id = $2
    `;

    const val = [user_id, removeItem]

    db.query(queryString, val)
    .then(() => {
      res.redirect("/favorites");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  })

  return router;
};
