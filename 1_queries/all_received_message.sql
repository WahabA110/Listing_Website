SELECT from_user_id as sender, to_user_id as receiver, messages.product_id, messages.message
FROM messages
JOIN users to_user ON to_user.id = to_user_id
JOIN users from_user ON from_user.id = from_user_id
WHERE to_user.id = 1 AND from_user.id = 4;
