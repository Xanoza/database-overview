-- DROP KEYSPACE IF EXISTS overview;


-- CREATE KEYSPACE overview WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE overview;

tracing on

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings(
  id varint PRIMARY KEY,
	rest_id varint,
	username text,
  ratings varint,
  gender text
);

COPY ratings(id, rest_id, username, ratings, gender) FROM 'dataRatings.csv' WITH HEADER=TRUE;