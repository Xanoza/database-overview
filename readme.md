##Test Queries

####1. Selecting a specific listing

##### Postgresql (primary)
``SELECT id,res_name,chef from listings where id=10000000``

 id----------|    res_name-----     |         chef

 10000000 | Elmo Gislason | Johnathon Abshire

 ``Planning Time: 1.148 ms
 Execution Time: 4.202 ms``
##### Cassandra(secondary)

``SELECT id,res_name,chef from listings where id=10000000``

 id----------|    res_name-----     |         chef

 10000000 | Elmo Gislason | Johnathon Abshire

``Source elapsed: 38.92 ms``
 #### 2. Selecting restaurants with a max price of 60 dollars
 
 ##### Postgresql 
 ``SELECT id,price_min,price_max,payment_options from listings where price_max < 55``

  id    | price_min | price_max | payment_options 

 8241855 |        20 |        50 |  Venmo
 8241857 |        23 |        51 |  Venmo
 8241883 |        15 |        50 |  IOU
 8241886 |        15 |        52 |  Credit
 8241895 |        27 |        54 |  Credit
....

  ``Rows Removed by Filter: 9295200
 Planning Time: 0.371 ms
 Execution Time: 19147.712 ms``


##### Cassandra 
 ``SELECT id,price_min,price_max,payment_options from listings where price_max < 55 ALLOW FILTERING`` 
 id      | price_min | price_max | payment_options
---------+-----------+-----------+-----------------
 1148109 |        28 |        51 |            Cash
 7040706 |        17 |        54 |          Credit
 3712314 |        22 |        50 |            Cash
 8899951 |        30 |        51 |          Credit
  726734 |        21 |        54 |            Cash
 9615253 |        23 |        51 |            Cash
 1176206 |        20 |        53 |             IOU
 1320275 |        12 |        54 |           Venmo