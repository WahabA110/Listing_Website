const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `SELECT to_user.name as to, from_user.name as from, from_user_id as sender, to_user_id as receiver, messages.product_id, messages.message
    FROM messages
    JOIN users to_user ON to_user.id = to_user_id
    JOIN users from_user ON from_user.id = from_user_id
    WHERE messages.from_user_id = $1 OR messages.to_user_id = $2;
    `;

    const userId = req.session.user_id;

    const values = [userId, userId];
    db.query(queryString, values)
      .then(data => {

        const messages = data.rows;
        const templateVars = {
          messages
        }
        res.render("messages", templateVars);
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

  });

  return router;
};
