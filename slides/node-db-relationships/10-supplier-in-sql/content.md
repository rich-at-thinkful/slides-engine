# Suppliers table in SQL

<div class='row'>
<div class='cell-4'>

```sql
DROP TABLE IF EXISTS suppliers;

CREATE TABLE suppliers (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  phone TEXT,
  city TEXT
);
```

</div>
<div class='cell-2 smallest'>


</div>
</div>