const express = require('express');
const router = express.Router();



module.exports = (db) => {

  // creates a new listing
  router.get("/new", (req, res) => {

    // render the form
    res.render('../views/admin_new_product');


  })

  // posts to /new to insert a new product into the database as an admin
  router.post("/new", (req, res) => {
    const queryString = `INSERT INTO products (user_id, name, price, description, thumbnail_photo)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;

    const user_id = req.session.user_id;
    const product_name = req.body.name;
    const product_price = req.body.price;
    const product_description = req.body.description;
    const product_photo = req.body.thumbnail_photo;

    const val = [user_id, product_name, product_price, product_description, product_photo];

    db.query(queryString, val)
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
      });
  });

  // this route allows admin to mark product as sold or remove it from site/db
  router.get("/products", (req, res) => {

    const queryString = `SELECT * FROM products`;

    db.query(queryString)
      .then(data => {
        const products = data.rows;
        const templateVars = { products };
        res.render("../views/admin_products", templateVars);
      })
      .catch(err => {
        console.log(err);
      });

  })
  // posts to /products to remove an item from the db or just mark as sold
  router.post("/products/:id", (req, res) => {

    const queryString = `
    DELETE FROM products
    WHERE products.id = $1
    `;

    const deleteItem = req.params.id;

    const val = [deleteItem];

    db.query(queryString, val)
      .then(() => {
        res.redirect("/admin/products");
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.post("/sold/:id", (req, res) => {

    const itemId = req.params.id;

    const queryString = `
    UPDATE products
    SET sold_date = current_timestamp
    where id = $1
    `;

    const val = [itemId]

    db.query(queryString, val)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch(err => {
      console.log(err);
    });

  })

  return router;
};

