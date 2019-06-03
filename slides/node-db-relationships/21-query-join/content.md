# Querying Relationships

* The database has been normalized (split across tables)
* To make useful queries, we will often need to access rows on multiple tables
* Introducing the `JOIN` keyword


<div class='row'>
<div class='cell-4'>

## Syntax 

```sql {#join-example-1 data-span="3:18:48 .fragment data-style=highlight-in data-index=1"}
SELECT [fields] 
FROM [table1]
JOIN [table2] ON [table1.field] = [table2.field];
```

</div>
<div class='cell-2 smallest'>

identifies the primary key and foreign key link {.annotation data-for=join-example-1 data-line=3 .fragment data-index=1}

</div>
</div> <!-- end row -->

<div class='row fragment' data-index=2>
<div class='cell-4'>

## Additional JOINs permitted

```diff {#join-example-2}
  SELECT [fields] 
  FROM [table1]
  JOIN [table2] ON [table1.field] = [table2.field]
+ JOIN [table3] ON [table2.field] = [table3.field]
+ JOIN [table4] ON [table1.field] = [table4.field];
```

</div>
<div class='cell-2 smallest'>

</div>
</div>
