# Middleware for generating server logs

* Popular middleware library: [morgan](https://github.com/expressjs/morgan#readme)
* Middleware needs to be **mounted** into the **request pipeline**

```js {data-span="6:1:80 .highlight"}
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/some-path', (req, res) => {});

app.listen(8080, () => console.log('Server on 8080'));
```

<div class="fragment" data-index="1">

* Each middleware has different ways to configure. Be sure to [read the docs!](https://github.com/expressjs/morgan#readme)
* We're going to use our own custom middleware in future lessons

</div>
