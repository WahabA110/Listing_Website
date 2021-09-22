SELECT product_id AS product, user_id AS user, seller_id AS seller, messages.message, messages.created
FROM conversations
JOIN messages ON conversation_id=conversations.id;

SELECT * FROM conversations
JOIN products ON product_id=products.id
JOIN users ON conversations.user_id=users.id
WHERE conversations.user_id=5 or seller_id=5;
