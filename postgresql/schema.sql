DROP DATABASE IF EXISTS overview;

CREATE DATABASE overview;

\c overview;

\timing

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  id BIGINT PRIMARY KEY,
	res_name TEXT,
	ratings_num integer NOT NULL,
	rating integer NOT NULL,
	descript TEXT,
	price_min INT,
	price_max INT,
	food_type TEXT,
	city TEXT,
	lunch_hrs INT,
	dinner_hrs INT,
	dress_code TEXT,
	payment_options TEXT,
	chef TEXT,
	entertainment TEXT,
	additional_info TEXT,
	website TEXT,
	phone_number VARCHAR(25),
	street_address TEXT
);





\COPY listings(id, res_name, ratings_num, rating, descript, price_min, price_max, food_type, city,  lunch_hrs, dinner_hrs, dress_code, payment_options, chef, entertainment, additional_info, website, phone_number, street_address) FROM 'data.csv' DELIMITER ',' CSV HEADER;

