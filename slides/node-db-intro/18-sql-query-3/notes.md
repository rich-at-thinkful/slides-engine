# Solutions

```sql
SELECT *
FROM products
WHERE department = 'pets'
ORDER BY price;

SELECT COUNT(*) AS product, department
FROM products
GROUP BY department;

SELECT *
FROM products
WHERE name ILIKE '%canned%'
AND aisle NOT ILIKE '%canned%';

SELECT department, ROUND(AVG(price),2) AS "Average Cost"
FROM products
GROUP BY department
ORDER BY "Average Cost";
```
