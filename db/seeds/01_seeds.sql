INSERT INTO users (name, cellphone, email)
VALUES ('Eva Stanley', '3700059977', 'sebastianguerra@ymail.com'),
('Louisa Meyer', '2121833442', 'jacksonrose@hotmail.com'),
('Dominic Parks', '5627245217', 'victoriablackwell@outlook.com'),
('Sue Luna', '6747788860 ', 'jasonvincent@gmx.com'),
('Rosalie Garza', '7273029973', 'jacksondavid@gmx.com'),
('Etta West', '8245321452', 'charlielevy@yahoo.com'),
('Margaret Wong', '0539180801','makaylaweiss@icloud.com'),
('Leroy Hart', '7423238090', 'jaycereynolds@inbox.com');

INSERT INTO admins (user_id)
VALUES (2),
(1),
(8),
(3),
(4),
(7),
(9),
(5);

INSERT INTO messages (message, sender_id, receiver_id, product_id)
VALUES ('messages', 2, 5, 8),
('messages', 1, 4, 3),
('messages', 8, 1, 2),
('messages', 3, 8, 5),
('messages', 1, 2, 7),
('messages', 4, 3, 2),
('messages', 7, 3, 5),
('messages', 5, 6, 5);

INSERT INTO favourites (product_id, user_id)
VALUES (2, 5),
(1, 4),
(8, 1),
(3, 8),
(9, 2),
(7, 3),
(5, 6),
(5, 5);

INSERT INTO products (user_id, name, price, description, thumbnail_photo)
VALUES (2, 'scandinavian', 50000, 'description', "https://image.shutterstock.com/image-photo/green-plant-on-scandinavian-cabinet-600w-1132477883.jpg"),
(6, 'illustration', 'description', 40000, 'https://image.shutterstock.com/image-illustration/space-canvas-on-wall-living-600w-315041414.jpg'),
(5, 'minimalist', 'description', 30000, 'https://image.shutterstock.com/image-illustration/white-minimalist-living-room-interior-600w-1729593625.jpg'),
(8, 'white', 'description',10000, 'https://image.shutterstock.com/image-illustration/white-living-room-sofa-scandinavian-600w-1672306783.jpg'),
(7, 'green', 'description', 30000, 'https://image.shutterstock.com/image-illustration/white-living-room-interior-furniture-600w-1547539412.jpg'),
(4, 'pink', 'description', 60000, 'https://image.shutterstock.com/image-illustration/blue-minimalist-living-room-interior-600w-1702134031.jpg'),
(3, 'overprice', 'description', 80000, 'https://image.shutterstock.com/image-illustration/interior-living-room-3d-illustration-600w-1315113887.jpg'),
(1, 'orange', 'description', 20000, 'https://image.shutterstock.com/image-illustration/white-living-room-interior-furniture-600w-1545671903.jpg');

