INSERT INTO Store(storename, star, minimum_price, place_id, category_id) VALUES("샌드위치", 4.3, 13000, 2, 3);

SELECT * FROM Store
LEFT JOIN Category
ON Store.category_id = Category._id;
LEFT JOIN Place
ON Store.place_id = Place._id;