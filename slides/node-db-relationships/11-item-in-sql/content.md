# Items table in SQL

<div class='row'>
<div class='cell-4'>

```sql {#item-sql-1 data-span="8:23:45 .fragment data-style=highlight-in-out data-index=1; 8:47:54 .fragment data-style=highlight-in data-index=2"}
DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  unit TEXT,
  unit_cost numeric,
  supplier_id INTEGER REFERENCES suppliers(id) NOT NULL
); 
```

</div>
<div class='cell-2 smallest'>

`REFERENCES` constraint: if `id` provided, must be a valid supplier {.annotation data-for=item-sql-1 data-line=8 .fragment data-index=1}

`NOT NULL` constraint: prevents item existing without a supplier {.annotation data-for=item-sql-1 data-line=8 .fragment data-index=2}

</div>
</div>