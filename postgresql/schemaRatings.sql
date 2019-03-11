-- DROP DATABASE IF EXISTS overview;

-- CREATE DATABASE overview;

\c overview;

\timing

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
	rest_id BIGINT,
	username TEXT,
	ratings SMALLINT,
  gender TEXT
);

\COPY ratings(id, rest_id, username, ratings, gender) FROM 'dataRatingstest.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX restaurants ON ratingstest(rest_id);

