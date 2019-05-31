# SQL Commands

## Create a Table

```sql
CREATE TABLE items (
  id           serial    PRIMARY KEY,
  name         text      NOT NULL,
  description  text,
  completed    boolean   DEFAULT false,  
  created      timestamp DEFAULT now()
);
```

<div class="row">
<div class="cell-4">

* **PRIMARY KEY:** unique, non-null value
* **SERIAL:** auto-incrementing sequence of integers

</div>
</div>

## Drop a Table

```sql
DROP TABLE items;
DROP TABLE IF EXISTS items;
```
