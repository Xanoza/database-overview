USE overview;

tracing on;

SELECT id from listings where price_min = 10 and price_max = 50 LIMIT 2000 ALLOW FILTERING;
