# Set On Delete Cascade

<div class='row'>
<div class='cell-4'>

```diff
CREATE TABLE supplier_order (
- item INTEGER REFERENCES item(id) NOT NULL,
+ item INTEGER REFERENCES item(id) ON DELETE CASCADE NOT NULL, 
```

</div>
<div class='cell-2 smallest'>

</div>
</div> <!-- end row -->

<div class='row'>
<div class='cell-4'>

```bash {#db-rollback}
npx postgrator 0
npx postgrator
psql -d suppliers -f ./seed/seed.suppliers.sql
```

</div>
<div class='cell-2 tiny fragment' data-index=1>

rollback migrations to start {.annotation data-for=db-rollback data-line=1}

run migrations {.annotation data-for=db-rollback data-line=2}

reseed {.annotation data-for=db-rollback data-line=3}

</div>
</div> <!-- end row -->


<div class='row'>
<div class='cell-4'>

```sql {.fragment data-index=2}
DELETE FROM item WHERE id = 1;
DELETE 1
```

</div>
<div class='cell-2 smallest'>

Success! {.fragment data-index=2 .background-green style=padding-left:15px}

</div>
</div>

