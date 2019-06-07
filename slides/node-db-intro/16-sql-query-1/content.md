# SQL Commands - More Querying

* Let's have some fun with a much larger dataset!
* [Download CSV data](https://raw.githubusercontent.com/Thinkful-Ed/node-postgres-resources/master/products.csv){target=_blank}

<div class='row'>
<div class='cell-4'>

```sql {#sql-inv-1}
postgres=> CREATE DATABASE inventory;
postgres=> \c inventory

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  aisle TEXT,
  department TEXT,
  price NUMERIC
);

\copy products FROM './products.csv' CSV;
```

</div>
<div class='cell-2 smallest'>

create and connect to new database {.annotation data-for=sql-inv-1 data-line=2 .fragment data-index=1}

create products table with 5 fields {.annotation data-for=sql-inv-1 data-line=4 .fragment data-index=2}

import data from CSV file {.annotation data-for=sql-inv-1 data-line=12 .fragment data-index=3} 
</div>
</div>

