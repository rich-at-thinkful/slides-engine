# Use fixture in beforeEach

<div class='row'>
<div class='cell-4'>

```js {#context-2}
const { makeArticlesArray } = require('./articles.fixtures.js');

describe('GET /articles', () => {
  context('Given articles exist', () => {
    const testArticles = makeArticlesArray();

    beforeEach(() => {
      return db
        .insert(testArticles)
        .into('blogful_articles');
    });

    it('responds 200 with articles', () => {
      return supertest(app)
        .get('/articles')
        .expect(200, testArticles);
    });
  })
});
```

</div>
<div class='cell-2 smallest'>

generate new dummy data from fixture {.annotation data-for=context-2 data-line=5 .fragment data-index=1}

insert data into clean test db before each test {.annotation data-for=context-2 data-line=10 .fragment data-index=2}

all tests in this context will start with specific dummy data {.annotation data-for=context-2 data-line=13 .fragment data-index=3}

</div>
</div>
