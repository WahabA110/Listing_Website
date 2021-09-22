const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/:name", (req, res) => {

    const queryString = `
    Select message, senderid.name as from, created
    FROM messages
    JOIN users senderid ON senderid.id = sender_id
    WHERE senderid.name = $1
    ;`;

    const name = req.params.name

    const val = [name];

    // const userId = req.session.user_id;

    db.query(queryString, val)
      .then(data => {

        const messages = data.rows;
        console.log(messages)

        const templateVars = {
          messages,
          name
        };
        res.render("messages", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.post("/", (req, res) => {
  //   const fromUser = req.session.userId;
  //   const toUser = req.body.to_user_id;
  //   const text = req.body.text;

  //   const queryString = `INSERT INTO messages (from_user_id, to_user_id, product_id, message)
  //                         VALUES ($1, $2, $3, $4);`;

  // });

  return router;
};


// <% if (message.sender!=userId) { %>
//   <input type="hidden" value="<%= message.sender %>">
//   <button class="reply-btn" type="button">Reply</button>
// <% }%>
