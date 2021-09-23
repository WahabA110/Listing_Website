INSERT INTO users (id, name, phone_number, email, is_admin, random_id)
VALUES (1, 'Eva Stanley', '3700059977', 'sebastianguerra@ymail.com', TRUE, 370005),
(2, 'Louisa Meyer', '2121833442', 'jacksonrose@hotmail.com', TRUE, 212183),
(3, 'Dominic Parks', '5627245217', 'victoriablackwell@outlook.com', FALSE, 562724),
(4, 'Sue Luna', '6747788860 ', 'jasonvincent@gmx.com', FALSE, 674778),
(5, 'Rosalie Garza', '7273029973', 'jacksondavid@gmx.com', FALSE, 727302),
(6, 'Etta West', '8245321452', 'charlielevy@yahoo.com', FALSE, 824532),
(7, 'Margaret Wong', '0539180801','makaylaweiss@icloud.com', FALSE, 053918),
(8, 'Leroy Hart', '7423238090', 'jaycereynolds@inbox.com', FALSE, 756742);

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


INSERT INTO conversations (id, product_id, user_id, seller_id)
VALUES (1, 6, 7, 2),
(2, 8, 5, 2),
(3, 7, 4, 1);
ALTER SEQUENCE conversations_id_seq RESTART WITH 4;

INSERT INTO messages (message, conversation_id, sender_id)
VALUES ('messages', 1, 7),
('messages', 1, 2),
('messages', 2, 5),
('messages', 2, 2),
('messages', 3, 4),
('messages', 3, 1);


INSERT INTO favorites (product_id, user_id)
VALUES (2, 5),
(1, 4),
(8, 3),
(3, 8),
(6, 7),
(7, 3),
(4, 6),
(5, 5);



