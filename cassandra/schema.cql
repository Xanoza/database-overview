
DROP KEYSPACE IF EXISTS overview;

CREATE KEYSPACE overview WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE overview;

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  id varint PRIMARY KEY,
	res_name text ,
	ratings_num varint,
	rating varint,
	descript text,
	price_min varint,
	price_max varint,
	food_type text,
	city text,
	lunch_hrs varint,
	dinner_hrs varint,
	dress_code text,
	payment_options text,
	chef text,
	entertainment text,
	additional_info text,
	website text,
	phone_number text,
	street_address text
);

COPY listings(id, res_name, ratings_num, rating, descript, price_min, price_max, food_type, city,  lunch_hrs, dinner_hrs, dress_code, payment_options, chef, entertainment, additional_info, website, phone_number, street_address) FROM 'data.csv' WITH HEADER=TRUE;





