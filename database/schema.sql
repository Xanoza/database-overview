DROP DATABASE IF EXISTS overview;

CREATE DATABASE overview;

\c overview;

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
	res_name TEXT,
	ratings_num integer NOT NULL,
	rating integer NOT NULL,
	descript TEXT,
	price_min INT,
	price_max INT,
	food_type TEXT,
	tag_one TEXT,
	tag_two TEXT,
	tag_three TEXT,
	neighborhood TEXT,
	brunch_hrs INT,
	lunch_hrs INT,
	dinner_hrs INT,
	dining_style TEXT,
	dress_code TEXT,
	payment_options TEXT,
	chef TEXT,
	entertainment TEXT,
	additional_info TEXT,
	website TEXT,
	phone_number INT,
	street_address TEXT
);



\COPY listings(res_name, ratings_num, rating, descript, price_min, price_max, food_type, tag_one, tag_two, tag_three, neighborhood, brunch_hrs, lunch_hrs, dinner_hrs, dining_style, dress_code, payment_options, chef, entertainment, additional_info, website, phone_number, street_address) FROM 'test1.csv' DELIMITER ',' CSV HEADER;

