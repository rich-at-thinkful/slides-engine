# Ex. For all orders under $600, get item names with quantity ordered

Single query using JOIN to acquire precisely the data we need in a consistent format {.smaller style=width:60%}

<hr />

<div class='row fragment' data-index=0>
<div class='cell-4'>

```sql
SELECT item.item_name as product, supplier_order.amount as quantity 
FROM supplier_order
JOIN item ON item.id = supplier_order.item
WHERE total_cost < 600;
```

```text {#ex-1-query-1}
     product     | quantity 
-----------------+----------
 Paper Additives |       10
 Wood pulp       |       50
 ```

</div>
<div class='cell-2 smallest'>


</div>
</div> <!-- end row -->


<div class='row fragment' data-index=1>
<div class='cell-6'>

<hr />

## Compare to `JOIN` output using `SELECT *`: {.smaller}

```text
 id | order_date | item | amount | total_cost | shipping_status | id |    item_name    | unit | unit_cost | supplier 
----+------------+------+--------+------------+-----------------+----+-----------------+------+-----------+----------
  1 | 2019-06-03 |    1 |     10 |       38.5 | Delivered       |  1 | Paper Additives | LBS  |      3.85 |        1
  3 | 2019-06-03 |    3 |     50 |        560 | Shipped         |  3 | Wood pulp       | LBS  |      0.20 |        2
```

</div>
</div>

<div class="highlight-column-amount fragment" data-index=2></div>
<div class="highlight-column-item-name fragment" data-index=2></div>

<!-- * List all cities of suppliers who have orders not yet shipped -->


<style>
.highlight-column-amount {
  width: 100px;
  height: 90px;
  border: 3px solid red;
  position: fixed;
  top: 520px;
  left: 280px;
}

.highlight-column-item-name {
  width: 182px;
  height: 90px;
  border: 3px solid red;
  position: fixed;
  top: 520px;
  left: 690px;
}
</style>

it's just two joined tables with columns extracted and renamed! {.smallest .center .fragment data-index=2 style=color:var(--red)}
