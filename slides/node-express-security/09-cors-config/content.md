# CORS Node Package

* We could configure our server's CORS policy manually
* ... or we can use the `cors` NPM package!

```bash
$ npm install cors
```

```js
const cors = require('cors');

app.use(cors());
```

* Default configuration:

```
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
```

* Warning! You should be more restrictive in a real application {.fragment data-index="1" style="color:red;"}