# Let's try to break some FK constraints!

## Deletion Errors

<div class='row'>
<div class='cell-4'>

```sql {#fk-break-3}
INSERT INTO supplier_order 
    (item, amount, total_cost, shipping_status) VALUES (1, 20, 10, 'Shipped');

DELETE FROM item WHERE id = 1;
```

</div>
<div class='cell-2 smallest'>

We'll add an order for item 1 {.annotation data-for=fk-break-3 data-line=1 .fragment data-index=1}

But what happens if we then try to delete item 1? {.annotation data-for=fk-break-3 data-line=4 .fragment data-index=2}

</div>
</div>


<div class='row'>
<div class='cell-4'>

```sql {#fk-break-3a .fragment data-index=3}
ERROR:  update or delete on table "item" violates 
    foreign key constraint "supplier_order_item_fkey" on table "supplier_order"
DETAIL:  Key (id)=(1) is still referenced from table "supplier_order".
```

</div>
<div class='cell-2 smallest'>

Another FK constraint - cannot delete a record that is referenced elsewhere {.fragment data-index=3 .background-red style=padding-left:10px}

</div>
</div>

