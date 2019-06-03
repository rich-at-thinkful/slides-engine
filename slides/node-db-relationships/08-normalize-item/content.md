# Time to Normalize: decompose items

* Extract the relevant fields for items and place in their own table
* Add a column to apply a **relationship** of the item to a supplier

### *item table* {style=margin-top:25px}

<div class="row">
<div class="cell-4">

![Normalize Item](normalize-items.png)

</div>

<div class="cell-2 smaller fragment" data-index="1">

* item.supplier column must be a valid supplier.id

* a column in one table that **references** the primary key of another is called a **foreign key**

* a single supplier may be related to many items - aka one-to-many relationship

</div>
</div>

<div class="highlight-column-1 fragment" data-index="1"></div>

<style>
.highlight-column-1 {
  width: 135px;
  height: 315px;
  border: 3px solid red;
  position: fixed;
  top: 280px;
  left: 680px;
}
</style>