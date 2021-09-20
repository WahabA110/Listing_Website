SELECT name, description, thumbnail_photo, price
FROM products
WHERE sold_date IS NULL
ORDER BY price DESC;
