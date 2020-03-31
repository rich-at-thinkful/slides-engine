# Solutions

```sql
SELECT *
FROM products
WHERE aisle = 'coffee';

SELECT *
FROM products
WHERE department = 'bakery'
AND aisle = 'bakery desserts';

SELECT DISTINCT(aisle)
FROM products;

SELECT COUNT(DISTINCT(aisle))
FROM products;

SELECT *
FROM products
WHERE aisle = 'tea'
AND department = 'beverages'
AND price > 10
AND price < 15

SELECT *
FROM products
WHERE aisle = 'tea'
AND department = 'beverages'
AND price > 10
AND price < 15
AND name ILIKE '%herbal%';
```