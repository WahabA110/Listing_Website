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
VALUES (1, 2, 'Giant grey sectional', 90000, 'Contemporary grey sectional perfect for a large and trendy modern living room.', 'https://images.pexels.com/photos/6969834/pexels-photo-6969834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', null),
(2, 2, 'Grey Couch', 40000, 'Easygoing. Pet friendly.', 'https://images.pexels.com/photos/5998023/pexels-photo-5998023.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', null),
(3, 1, 'Linen', 30000, 'Light grey linen sofa.', 'https://images.pexels.com/photos/4846459/pexels-photo-4846459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', null),
(4, 2, 'Scandinavian', 50000, 'White sofa bed.', 'https://images.pexels.com/photos/6890412/pexels-photo-6890412.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', null),
(5, 2, 'Crimson', 50000, 'Crimson velvet vintage sofa.', 'https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', null),
(6, 2, 'Grey Velvet', 60000, 'Grey velvet couch and footrest set.', 'https://images.pexels.com/photos/6947272/pexels-photo-6947272.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', null),
(7, 1, 'Luxurious', 80000, 'Large soft sofa perfect for a luxurious modern lounge.', 'https://images.pexels.com/photos/6587838/pexels-photo-6587838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', null),
(8, 2, 'Frugal', 10000, 'Our cheapest product.', 'https://images.pexels.com/photos/5824517/pexels-photo-5824517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', '2021-09-05');
ALTER SEQUENCE products_id_seq RESTART WITH 9;


INSERT INTO conversations (id, product_id, user_id, seller_id)
VALUES (1, 6, 3, 2),
(2, 4, 5, 2),
(3, 7, 4, 1);
ALTER SEQUENCE conversations_id_seq RESTART WITH 4;

INSERT INTO messages (message, conversation_id, sender_id)
VALUES ('Hi, interested in the Grey Velvet couch. Do you guys do delivery and assembling? Dominic', 1, 3),
('Hi Dominic, thank you for your inquiry. Yes, we provide delivery and assembling for free for items over $500. Please let me know if you are still interested. Cheers, Louisa Meyer', 1, 2),
('Hi, I am interested in the Scandinavian white sofa bed. What is the fully expanded size? Rosalie', 2, 5),
('Hi Rosalie, the sofa converts to a double bed when fully expanded. We provide free delivery and assembling for items over $500. Please let me know if you are interested in purchasing this item. Cheers, Louisa Meyer', 2, 2),
('Hi, I am interested in the Luxurious sofa. What is the material? Sue', 3, 4),
('Hi Sue, the Luxurious sofa set is velvet. Six people can sit on them comfortably. Please let me know if you are still interested. Sincerely, Eva Stanley', 3, 1);


INSERT INTO favorites (product_id, user_id)
VALUES (2, 5),
(1, 4),
(8, 3),
(3, 4),
(6, 3),
(7, 3),
(5, 6),
(4, 4),
(5, 5);



