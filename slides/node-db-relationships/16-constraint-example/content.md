# Let's try to break some FK constraints!

## Insertion Errors

<div class='row'>
<div class='cell-4'>

```sql {#fk-break-1}
INSERT INTO orders
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
ERROR:  null value in column "item_id" violates not-null constraint
DETAIL:  Failing row contains (1, 2019-02-06, null, 20, 20, Shipped).
```

</div>
<div class='cell-2 smallest'>

We can't place an order if item_id value is null {.fragment data-index=2 .background-red style=padding-left:10px}

</div>
</div>

<hr class="fragment" data-index="3" />


<div class='row'>
<div class='cell-4'>

```sql {#fk-break-2 .fragment data-index=3 data-span="2:6:12 .fragment data-style=highlight-in data-index=3; 2:60:63 .fragment data-style=highlight-in data-index=3;"}
INSERT INTO orders 
    (item_id, amount, total_cost, shipping_status) VALUES (666, 20, 20, 'Shipped');
```

</div>
<div class='cell-2 smallest'>

We've supplied an `item_id` value, so now what's the issue? {.fragment data-index=3}

</div>
</div>


<div class='row'>
<div class='cell-4'>

```sql {#fk-break-2a .fragment data-index=4}
ERROR:  insert or update on table "orders" 
    violates foreign key constraint "orders_item_id_fkey"
DETAIL:  Key (item_id)=(666) is not present in table "items".
```

</div>
<div class='cell-2 smallest'>

FK constraint! the item id does not exist {.fragment data-index=4 .background-red style=padding-left:10px}

</div>
</div>
