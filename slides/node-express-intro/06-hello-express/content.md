# Hello, Express!

<div class="row">

<div class="grid-4">

```bash
$ npm install express
```

### server.js

```js {#express-boiler}
const express = require('express');
const app = express();

app.get('/blog', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.end('<html><body><h1>My blog!</h1></body></html>');
});

app.listen(8080, () => console.log('Server on 8080'));
```
</div>

<div class="grid-2">

Import Express library {.annotation .fragment style="font-size:.8em;" data-index="1" data-style="in-out" data-for="express-boiler" data-line="1"}

Instantiate a new Express `app` object {.small .annotation .fragment style="font-size:.8em;" data-index="2" data-style="in-out" data-for="express-boiler" data-line="2"}

Respond only if request path is `"/blog"` {.small .annotation .fragment style="font-size:.8em;" data-index="3" data-style="in-out" data-for="express-boiler" data-line="4"}

Set response header to indicate HTML in body {.small .annotation .fragment style="font-size:.8em;" data-index="4" data-style="in-out" data-for="express-boiler" data-line="5"}

Send HTML content and end the response {.small .annotation .fragment style="font-size:.8em;" data-index="5" data-style="in-out" data-for="express-boiler" data-line="6"}

Initiate the server on port 8080 {.small .annotation .fragment style="font-size:.8em;" data-index="6" data-style="in-out" data-for="express-boiler" data-line="9"}

</div>

</div>
