# Fixtures

* Fixtures are dummy data used in testing
* Instead of creating data for every test, fixtures help us reuse and keep our expected data consistent
* [Fixture Data](https://github.com/Thinkful-Ed/blogful-api/blob/test-gets-when-empty/test/articles.fixtures.js){target=_blank}

**./test/articles.fixtures.js**
```js
function makeArticlesArray() {
  return [
    {
      id: 1,
      date_published: '2029-01-22T16:28:32.615Z',
      title: 'First test post!',
      style: 'How-to',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    },
    // ...
  ]
};

module.exports = {
  makeArticlesArray,
}
```
