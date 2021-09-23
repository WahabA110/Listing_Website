const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/:random_id", (req, res) => {

    const queryString = `
    Select message, senderid.name as from, created, senderid.id, conversation_id
    FROM messages
    JOIN users senderid ON senderid.id = sender_id
    WHERE senderid.random_id = $1
    ;`;

    const random_id = req.params.random_id;

    const val = [random_id];

    // const userId = req.session.user_id;

    db.query(queryString, val)
      .then(data => {

        const messages = data.rows;
        const templateVars = {
          messages,
          conversationId: messages[0].conversation_id
        };
        res.render("messages", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/conversations/:conversation_id", (req, res) => {
    const queryString = `
    INSERT INTO messages (message, conversation_id, sender_id)
    VALUES ($1, $2, $3);
    `;

    const {message} = req.body;
    const {conversation_id} = req.params;
    const userId = req.session.user_id;
    const val = [message, conversation_id, userId];
    db.query(queryString, val)
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    //come back to redirect to appropriate place, add a query
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
