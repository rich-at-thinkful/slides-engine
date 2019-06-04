# DELETE Considerations

* If your id is a number (e.g. not a UUID), bear in mind that parameters are ALWAYS received as **strings** from the client

  * Manual coercion to a number data type may be necessary {.smaller}

* The act of deleting data should never be taken lightly! {.fragment data-index=1}
<div class="smaller fragment" data-index="2" style='padding-left:40px'>
  
  * Data records often depend on other records
  * Imagine a system with **products** and **orders**
  * If an order holds 5 products and you delete one product, what happens to the order?
  * You may throw an error on your server trying to return the order when it can't find the product it expects

</div>

* We might flag records as `inactive` or `archived` rather than outright deletion {.fragment data-index=3}