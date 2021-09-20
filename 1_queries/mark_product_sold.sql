UPDATE products
SET sold_date = '2020-04-15'
FROM users
WHERE products.id = 8 AND users.id = 1 AND users.is_admin = TRUE;
