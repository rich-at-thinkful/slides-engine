# *app.test.js*

<div class="smaller">

## *should be 400 if sort value is incorrect*

* get a 400 response

</div>

<div class="row">
<div class="cell-4">

```diff
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /books', () => {
  it('should return 400 on incorrect sort value', () => {
    return request(app)
+     .get('/books')
+     .query({ sort: 'MISTAKE' })
+     .expect(400, 'Sort must be title or rank');
    });
  });
});
```

</div>
</div>