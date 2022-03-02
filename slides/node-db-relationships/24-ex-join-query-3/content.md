# Ex. List all cities of suppliers who have orders not yet shipped

<div class='row fragment' data-index=0>
<div class='cell-4'>

``` {#join-part-1 data-span="2:6:19 .fragment data-style=highlight-in-out data-index=1; 3:7:19 .fragment data-style=highlight-in-out data-index=1"}
SELECT suppliers.city
FROM orders
WHERE orders.shipping_status != 'Shipped';
```

</div>
<div class='cell-2 tiny'>

we're filtering our query by orders not shipped from the `orders` table {.annotation data-for=join-part-1 data-line=3 .fragment data-index=1 data-style=in-out}

but we want to display a field from `suppliers` table, which we're not accessing yet {.annotation data-for=join-part-1 data-line=1 .fragment data-index=2 data-style=in-out}

</div>
</div> <!-- end row -->

<div class='row fragment' data-index=3>
<div class='cell-4'>

```diff {#join-part-2 data-span="3:17:23 .fragment data-style=highlight-in-out data-index=4;"}
  SELECT suppliers.city
  FROM orders
+ JOIN suppliers ON ...?
  WHERE orders.shipping_status != 'Shipped';
```

</div>
<div class='cell-2 tiny'>

We need to join in the `suppliers` table but there's no **reference** from `orders`. That table only references the `items` {.annotation data-for=join-part-2 data-line=3 .fragment data-index=4 data-style=in-out}

</div>
</div> <!-- end row -->


<div class='row fragment' data-index=5 style="margin-top:35px">
<div class='cell-4'>

```diff {#join-part-3 .fragment data-index=5}
  SELECT suppliers.city as "Cities pending shipping"
  FROM orders
+ JOIN items ON orders.item_id = items.id
+ JOIN suppliers ON items.supplier_id = suppliers.id
  WHERE orders.shipping_status != 'Shipped';
```

</div>
<div class='cell-2 tiny'>

So let's first `JOIN` the `items` table onto `orders`... {.annotation data-for=join-part-3 data-line=3 .fragment data-index=6 data-style=in}

...and then `JOIN` the `suppliers` table onto `items` {.annotation data-for=join-part-3 data-line=4 .fragment data-index=7}

</div>
</div> <!-- end row -->

<div class="row"><div class="cell-4">

``` {.fragment data-index=8}
 Cities pending shipping 
-------------------------
 Appleton
 Moscow
 Falkenhagen
```

</div><div class="cell-2"></div></div>



<!--
the first query is just two joined tables with the `SELECT` columns extracted and renamed {.smallest .center .fragment data-index=2 style=color:var(--red)}
-->
