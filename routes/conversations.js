const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `Select userid.name as to, sellerid.name as from
    FROM conversations
    JOIN users userid ON userid.id = user_id
    JOIN users sellerid ON sellerid.id = seller_id
    WHERE user_id = $1 OR seller_id=$2;
    `;

    const userId = req.session.user_id;

    const values = [userId, userId];
    db.query(queryString, values)
      .then(data => {

        const rows = data.rows;
        console.log("rows:", rows)
        const templateVars = {
          rows,
          userId
        };
        res.render("conversations", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    const fromUser = req.session.userId;
    const toUser = req.body.to_user_id;
    const text = req.body.text;

    const queryString = `INSERT INTO messages (from_user_id, to_user_id, product_id, message)
                          VALUES ($1, $2, $3, $4);`;

  });

  return router;
};
