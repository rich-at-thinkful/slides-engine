# Walkthrough GET /articles

<div class="row">
<div class="cell-3">

* Copy over [ArticlesService](https://gist.github.com/tomatau/f79c7f4ef53c5ec5e86656d4b43dcbc9){target=_blank}

<div class="fragment" data-index="1">

* Write endpoint test

<div class="smaller" style="padding-left:25px;">

  * Create test database
  * Run migrations on test db (run with `TEST_DB_URL` env)
  * Setup `before` and `after`s
    * **before**: setup `db` knex instance {.smaller}
    * **before**: truncate table {.smaller}
    * **afterEach**: truncate table {.smaller}
    * **after**: disconnect from db {.smaller}
  * Create context with dummy data
  * Set `process.env.TZ` to `'UTC'` in test setup

</div>
</div>
</div>

<div class="cell-3">
<div class="fragment" data-index="2">

* Make test pass
  * Add DB_URL to config {.smaller}
  * Instantiate db, place it on `app` with `set()` {.smaller}
  * Write route {.smaller}

</div>

* Refactor to fixtures {.fragment data-index=3}
* Do it again with `GET /articles/:articleId`! {.fragment data-index=4}

</div>
</div>