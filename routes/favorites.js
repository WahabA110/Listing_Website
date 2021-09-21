const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `SELECT products.name, description, thumbnail_photo, price
    FROM products
    JOIN favorites ON product_id = products.id
    JOIN users ON favorites.user_id = users.id
    WHERE sold_date IS NULL AND users.id = $1
    ORDER BY price;
    `;
    const user_id = req.session.user_id;

    const val = [user_id];

    // console.log(queryString);

    db.query(queryString, val)
      .then(data => {
        const products = data.rows;
        res.json({ products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
