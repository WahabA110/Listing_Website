SELECT products.name, description, thumbnail_photo, price
FROM products
JOIN favorites ON product_id = products.id
JOIN users ON favorites.user_id = users.id
WHERE sold_date IS NULL AND users.id = 7
ORDER BY price;
