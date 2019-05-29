# *app.test.js*

<div class="smaller">

## *return array of books*

* get a 200 response of JSON type
* response body holds an array {style="color:green;font-weight:bold;"}

</div>

<div class="row">
<div class="cell-4">

```diff
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /books', () => {
  it('should return an array of books', () => {
    return request(app)
      .get('/books')
      .expect(200)
      .expect('Content-Type', /json/)
+     .then(res => {
+       expect(res.body).to.be.an('array');
+     });
  });
});
```

</div>
</div>