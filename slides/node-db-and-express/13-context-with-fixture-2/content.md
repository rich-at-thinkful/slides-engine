# Use fixture in beforeEach

<div class='row'>
<div class='cell-4'>

```js {#context-2}
const { makeArticlesArray } = require('./articles.fixtures.js');

context('Given articles exist', () => {
  const testArticles = makeArticlesArray();

  beforeEach(() => {
    return db
      .insert(testArticles)
      .into('blogful_articles');
  });

  it('GET /articles responds 200 with articles', () => {
    return supertest(app)
      .get('/articles')
      .expect(200, testArticles);
  });
})
```

</div>
<div class='cell-2 smallest'>

generate new dummy data from fixture {.annotation data-for=context-2 data-line=4 .fragment data-index=1}

insert data into clean test db {.annotation data-for=context-2 data-line=9 .fragment data-index=2}

all tests in this context will start with specific dummy data {.annotation data-for=context-2 data-line=12 .fragment data-index=3}

</div>
</div>
