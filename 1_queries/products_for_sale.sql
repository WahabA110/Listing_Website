SELECT products.*, users.id, favorites.id
FROM products
JOIN users ON user_id = users.id
OUTER JOIN favorites ON product_id = products.id
WHERE sold_date IS NULL
ORDER BY favorites.id;
