# SQL Commands

## Select query

<div class="row">
<div class="cell-4">

```sql {#sql-1}
SELECT * FROM items;
```

</div>
<div class="cell-2">

all rows, all fields in items table {.annotation data-for=sql-1 data-line=1 .smallest}

</div>
</div>

<!-- next fragment -->
<div class="row fragment" data-index="1">
<div class="cell-4">

```sql {#sql-2}
SELECT name, description, completed FROM items;
```

</div>
<div class="cell-2">

all rows, **specific** fields {.annotation data-for=sql-2 data-line=1 .smallest}

</div>
</div>


<!-- next fragment -->
<div class="row fragment" data-index="2">
<div class="cell-4">

```sql {#sql-3}
SELECT name, description, completed 
FROM items
WHERE name = 'Coffee'
AND completed = true;
```

</div>
<div class="cell-2">

**specific** row(s), **specific** fields {.annotation data-for=sql-3 data-line=4 .smallest}

</div>
</div>


<!-- next fragment -->
<div class="row fragment" data-index="3">
<div class="cell-4">

```sql {#sql-4}
SELECT name, description, completed 
FROM items
ORDER BY name
LIMIT 3;
```

</div>
<div class="cell-2">

ordered (default ascending), 3 rows max, **specific** fields {.annotation data-for=sql-4 data-line=4 .smallest}

</div>
</div>
