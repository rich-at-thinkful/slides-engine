# Ex. For all orders under $600, get item names with quantity ordered

With two queries (one against each table), we could get the data we need and manually structure into the data type required... {.smaller style=width:60%}

<hr />

<div class='row fragment' data-index=0>
<div class='cell-4'>

```sql
SELECT item as item_id, amount as quantity FROM supplier_order
WHERE total_cost < 600;
```

```text {#ex-1-query-1}
 item_id | quantity 
---------+----------
       1 |       10
       3 |       50
```

</div>
<div class='cell-2 smallest'>

first, get the item ids needed {.annotation data-for=ex-1-query-1}

</div>
</div> <!-- end row -->


<div class='row fragment' data-index=1>
<div class='cell-4'>

```sql
SELECT item_name from item WHERE id IN (1,3);
```

```text {#ex-1-query-2}
    item_name    
-----------------
 Paper Additives
 Wood pulp
```

</div>
<div class='cell-2 smallest'>

then lookup the name(s) against the identified item ids {.annotation data-for=ex-1-query-2}

</div>
</div>

Inefficient! Unscalable! {.fragment data-index=2 .smaller style=width:60%;color:var(--red)}





<!-- * List all cities of suppliers who have orders not yet shipped -->