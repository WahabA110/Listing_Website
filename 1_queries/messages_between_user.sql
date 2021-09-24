SELECT message, sender_id, created
FROM messages
JOIN users ON users.id = messages.sender_id;

Select message, senderid.name as from, created
FROM messages
JOIN users senderid ON senderid.id = sender_id
WHERE senderid.name = 'Louisa Meyer'
