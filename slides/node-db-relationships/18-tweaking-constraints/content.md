# Tweaking Constraints

<div class="smaller">

* We can assign different behavior on deletion

* `RESTRICT`
  * similar to `NO ACTION` default, prevents deletion if ref exists {.smaller}
* `CASCADE`
  * allow delete, then delete rows with referencing foreign key {.smaller}
* `SET NULL`
  * allow delete, then set referencing foreign key to NULL (if NULL allowed) {.smaller}
* `SET DEFAULT`
  * allow delete, then set referencing foreign key to default value, if specified {.smaller}

</div>