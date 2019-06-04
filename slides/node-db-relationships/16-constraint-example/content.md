# Let's try to break some FK constraints!

## Insertion Errors

<div class='row'>
<div class='cell-4'>

```sql {#fk-break-1}
INSERT INTO supplier_order 
    (amount, total_cost, shipping_status) VALUES (20, 20, 'Shipped');
```

</div>
<div class='cell-2 smallest'>

Why won't this order go through? {.fragment data-index=1}

</div>
</div>


<div class='row'>
<div class='cell-4'>

```sql {#fk-break-1a .fragment data-index=2}
ERROR:  null value in column "item" violates not-null constraint
DETAIL:  Failing row contains (1, 2019-02-06, null, 20, 20, Shipped).
```

</div>
<div class='cell-2 smallest'>

We can't place an order if item value is null {.fragment data-index=2 .background-red style=padding-left:10px}

</div>
</div>

<hr class="fragment" data-index="3" />


<div class='row'>
<div class='cell-4'>

```sql {#fk-break-2 .fragment data-index=3 data-span="2:6:9 .fragment data-style=highlight-in data-index=3; 2:57:59 .fragment data-style=highlight-in data-index=3;"}
INSERT INTO supplier_order 
    (item, amount, total_cost, shipping_status) VALUES (666, 20, 20, 'Shipped');
```

</div>
<div class='cell-2 smallest'>

We've supplied an item value, so now what's the issue? {.fragment data-index=3}

</div>
</div>


<div class='row'>
<div class='cell-4'>

```sql {#fk-break-2a .fragment data-index=4}
ERROR:  insert or update on table "supplier_order" 
    violates foreign key constraint "supplier_order_item_fkey"
DETAIL:  Key (item)=(666) is not present in table "item".
```

</div>
<div class='cell-2 smallest'>

FK constraint! the item id does not exist {.fragment data-index=4 .background-red style=padding-left:10px}

</div>
</div>
