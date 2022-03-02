# Set On Delete Cascade

<div class='row'>
<div class='cell-4'>

```bash
npx postgrator 0                                    # rollback migrations
```

```diff {.fragment data-index=1}
CREATE TABLE orders (
- item_id INTEGER REFERENCES items(id) NOT NULL,
+ item_id INTEGER REFERENCES items(id) ON DELETE CASCADE NOT NULL, 
```

</div>
<div class='cell-2 smallest'>

</div>
</div> <!-- end row -->

<div class='row'>
<div class='cell-4'>

```bash {#db-rollback .fragment data-index=2}
npx postgrator                                      # re-run migrations
psql -d suppliers -f ./seed/seed.suppliers.sql      # re-seed
```

</div>
<div class='cell-2 smallest'>
</div>
</div> <!-- end row -->


<div class='row'>
<div class='cell-4'>

```diff {.fragment data-index=3}
DELETE FROM items WHERE id = 1;
DELETE 1
```

</div>
<div class='cell-2 smallest'>

Success! {.fragment data-index=3 .background-green style=padding-left:15px}

</div>
</div>

