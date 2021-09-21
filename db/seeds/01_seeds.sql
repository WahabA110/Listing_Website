INSERT INTO users (id, name, phone_number, email, is_admin)
VALUES (1, 'Eva Stanley', '3700059977', 'sebastianguerra@ymail.com', TRUE),
(2, 'Louisa Meyer', '2121833442', 'jacksonrose@hotmail.com', TRUE),
(3, 'Dominic Parks', '5627245217', 'victoriablackwell@outlook.com', FALSE),
(4, 'Sue Luna', '6747788860 ', 'jasonvincent@gmx.com', FALSE),
(5, 'Rosalie Garza', '7273029973', 'jacksondavid@gmx.com', FALSE),
(6, 'Etta West', '8245321452', 'charlielevy@yahoo.com', FALSE),
(7, 'Margaret Wong', '0539180801','makaylaweiss@icloud.com', FALSE),
(8, 'Leroy Hart', '7423238090', 'jaycereynolds@inbox.com', FALSE);

INSERT INTO products (id, user_id, name, price, description, thumbnail_photo, sold_date)
VALUES (1, 2, 'scandinavian', 50000, 'description', 'https://image.shutterstock.com/image-photo/green-plant-on-scandinavian-cabinet-600w-1132477883.jpg', null),
(2, 2, 'illustration', 40000, 'description', 'https://image.shutterstock.com/image-illustration/space-canvas-on-wall-living-600w-315041414.jpg', null),
(3, 1, 'minimalist', 30000, 'description', 'https://image.shutterstock.com/image-illustration/white-minimalist-living-room-interior-600w-1729593625.jpg', null),
(4, 2, 'white', 10000, 'description', 'https://image.shutterstock.com/image-illustration/white-living-room-sofa-scandinavian-600w-1672306783.jpg', null),
(5, 2, 'green', 30000, 'description', 'https://image.shutterstock.com/image-illustration/white-living-room-interior-furniture-600w-1547539412.jpg', null),
(6, 2, 'pink', 60000, 'description', 'https://image.shutterstock.com/image-illustration/blue-minimalist-living-room-interior-600w-1702134031.jpg', null),
(7, 1, 'overprice', 80000, 'description', 'https://image.shutterstock.com/image-illustration/interior-living-room-3d-illustration-600w-1315113887.jpg', null),
(8, 2, 'orange', 20000, 'description', 'https://image.shutterstock.com/image-illustration/white-living-room-interior-furniture-600w-1545671903.jpg', '2021-09-05');
ALTER SEQUENCE products_id_seq RESTART WITH 9;

INSERT INTO messages (message, from_user_id, to_user_id, product_id)
VALUES ('messages', 5, 2, 8),
('messages', 4, 1, 3),
('messages', 8, 1, 2),
('messages', 3, 2, 5),
('messages', 5, 1, 7),
('messages', 4, 2, 2),
('messages', 7, 2, 5),
('messages', 5, 2, 5);

INSERT INTO favorites (product_id, user_id)
VALUES (2, 5),
(1, 4),
(8, 3),
(3, 8),
(6, 7),
(7, 3),
(4, 6),
(5, 5);



