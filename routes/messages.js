const express = require('express');
const router = express.Router();



module.exports = (db) => {
  router.get("/:convoId", (req, res) => {

    const queryString = `
    Select message, senderid.name as from, created, senderid.id, conversation_id
    FROM messages
    JOIN users senderid ON senderid.id = sender_id
    WHERE conversation_id = $1
    ;`;

    const convoId = req.params.convoId;

    const val = [convoId];

    db.query(queryString, val)
      .then(data => {

        const messages = data.rows;

        const templateVars = {
          messages,
          conversationId: messages[0].conversation_id,
          time: messages[0].created
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
        res.redirect("/conversations");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });


  return router;
};
