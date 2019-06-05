# Ex. For all orders under $600, get item names with quantity ordered

Single query using JOIN to acquire precisely the data we need in a consistent format {.smaller}

<hr />

<div class='row fragment' data-index=0>
<div class='cell-4'>

```sql {data-span="1:8:32 .fragment style=border-color:red data-style=highlight-in data-index=3; 1:35:67 .fragment style=border-color:red data-style=highlight-in data-index=3}
SELECT item.item_name as product, supplier_order.amount as quantity 
FROM supplier_order
JOIN item ON item.id = supplier_order.item
WHERE total_cost < 600;
```

```text {#ex-1-query-1}
     product      | quantity 
------------------+----------
 Paper Additives  |       10
 Abaca Sheet Pulp |       50
 Wood pulp        |     2000
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
 id | order_date | item | amount | total_cost | shipping_status | id |    item_name     | unit | unit_cost | supplier 
----+------------+------+--------+------------+-----------------+----+------------------+------+-----------+----------
  1 | 2019-06-03 |    1 |     10 |       38.5 | Delivered       |  1 | Paper Additives  | LBS  |      3.85 |        1
  3 | 2019-06-03 |    3 |     50 |        560 | Shipped         |  3 | Abaca Sheet Pulp | LBS  |     11.20 |        1
  5 | 2019-06-03 |    5 |   2000 |        400 | Preparing       |  5 | Wood pulp        | LBS  |      0.20 |        3
```

</div>
</div>

<div class="fragment" data-style="in-out" data-index="2">
  <div class="highlight-column highlight-column-all-order"></div>
  <div class="highlight-column highlight-column-all-item "></div>
  <div class="highlight-column-caption highlight-column-caption-all-order">supplier_order</div>
  <div class="highlight-column-caption highlight-column-caption-all-item">item</div>
</div>

<div class="highlight-column highlight-column-amount fragment" data-index=3></div>
<div class="highlight-column highlight-column-item-name fragment" data-index=3></div>

<!-- * List all cities of suppliers who have orders not yet shipped -->


<style>
.highlight-column {
  position: fixed;
  top: 500px;
  border-width: 3px;
  border-style: solid;
  height: 110px;
}

.highlight-column-caption {
  position: fixed;
  top: 610px;
  font-size: 0.9em;
  font-style: italic;
}

.highlight-column-caption-all-order {
  color: blue;
}

.highlight-column-caption-all-item {
  color: green;
  left: 650px;
}

.highlight-column-all-order {
  left: 65px;
  width: 580px;
  border-color: blue;
}
.highlight-column-all-item {
  left: 650px;
  width: 500px;
  border-color: green;
}

.highlight-column-amount {
  left: 280px;
  width: 100px;
  border-color: red;
}

.highlight-column-item-name {
  left: 690px;
  width: 182px;
  border-color: red;
}
</style>

the first query is just two joined tables with the `SELECT` columns extracted and renamed {.smallest .center .fragment data-index=3 style=color:var(--red)}
