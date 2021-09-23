const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `Select userid.name as to, sellerid.name as from, conversations.id as convo_id
    FROM conversations
    JOIN users userid ON userid.id = user_id
    JOIN users sellerid ON sellerid.id = seller_id
    WHERE user_id = $1 OR seller_id=$2;
    `;

    const userId = req.session.user_id;

    const values = [userId, userId];
    if (!userId) {
      res.send("Please login/register first <a href='/'>Go Back<a>");
      return;
    }
    db.query(queryString, values)
      .then(data => {

        const rows = data.rows;

        const templateVars = {
          rows,
          userId,
          convo_id: rows[0].convo_id
        };

        res.render("conversations", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
