# Setup Tests (cont.)

<div class='row'>
<div class='cell-4'>

**Before and After**
```js {#before-after-1}
describe('Articles Endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });

    app.set('db', db);
  });

  const cleanArticles = () => db('blogful_articles').truncate();
  before('clean the table', cleanArticles);
  afterEach('clean the table', cleanArticles);

  after('disconnect from db', () => db.destroy());
})
```

</div>
<div class='cell-2 smallest'>

`db` in top scope so all before/after callbacks have access {.fragment data-index=1 .annotation data-for=before-after-1 data-line=2}

set this test knex instance on app so our routes will use it {.fragment data-index=2 .annotation data-for=before-after-1 data-line=10}

ensure starting test suite with a fresh empty table {.fragment data-index=3 .annotation data-for=before-after-1 data-line=14}

empty db after every individual test {.fragment data-index=4 .annotation data-for=before-after-1 data-line=15}

release connection when all tests finished {.fragment data-index=5 .annotation data-for=before-after-1 data-line=17}

</div>
</div>

