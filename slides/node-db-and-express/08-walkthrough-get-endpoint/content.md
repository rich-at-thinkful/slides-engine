# Walkthrough GET /articles

<div class="row">
<div class="cell-3">

### server.js

<div class="smallest">

* Install `knex` and `pg` 
* Import `knex` to `server.js` and instantiate
* Set `DB_URL` in env and config

</div>

<div class="fragment" data-index="1">

### app.js

<div class="smallest">

* Copy over [ArticlesService](https://raw.githubusercontent.com/Thinkful-Ed/blogful-api/master/src/articles/articles-service.js){target=_blank}
* Create `/articles` endpoint
  * utilize service to get data and return as json
  * but how do we get access to the Knex instance? {style="color:var(--red);"}

</div>

</div> <!-- end fragment 1 -->

</div>
<div class="cell-3">

```diff {.fragment data-index=2}
  const db = knex({
    client: 'pg',
    connection: DB_URL,
  })

+ app.set('db', db)

  app.listen(PORT, () => {
```

we must use `req.app` so it works for tests, too {.annotation data-for=req-get data-line=1 .fragment data-index=4 .tiny}

```diff {.fragment data-index=3 #req-get}
+ const knexInstance = req.app.get('db');
+ ArticlesService.getAllArticles(knexInstance)
    .then(articles => {
      res.json(articles)
    })
    .catch(next);
  })
```

</div>
</div>

<!--
<div class="cell-3">

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

<div class="fragment" data-index="2">

* Make test pass
  * Add DB_URL to config {.smaller}
  * Instantiate db, place it on `app` with `set()` {.smaller}
  * Write route {.smaller}

</div>

* Refactor to fixtures {.fragment data-index=3}
* Do it again with `GET /articles/:articleId`! {.fragment data-index=4}

</div>
-->

