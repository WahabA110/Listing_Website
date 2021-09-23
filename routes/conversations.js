const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString = `Select userid.name as to, sellerid.name as from, sellerid.random_id, sellerid.id
    FROM conversations
    JOIN users userid ON userid.id = user_id
    JOIN users sellerid ON sellerid.id = seller_id
    WHERE user_id = $1 OR seller_id=$2;
    `;
    // randomid that comes from row is not the correct randomid that we want, not passing the correct data
    const userId = req.session.user_id;

    const values = [userId, userId];
    db.query(queryString, values)
      .then(data => {

        const rows = data.rows;
        console.log(rows)
        const templateVars = {
          rows,
          userId,
          id: rows[0].id
        };
        res.render("conversations", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.post("/", (req, res) => {
  //   res.redirect('messages');
  // })

  return router;
};
