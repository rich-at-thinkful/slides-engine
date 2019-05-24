# More Security with Helmet

* There are many vectors of attack on servers
* It's impossible to know if you're 100% secure, but that should always be the target
* Node package `helmet` sets some good defaults
  * e.g. Express announces itself in a response header, which could help a hacker use known exploits {.smaller}
  * Helmet disables this header by default {.smaller}
  * [...and more!](https://www.npmjs.com/package/helmet#how-it-works){target="_blank"} {.smaller}

```bash
$ npm install helmet
```

```js
const helmet = require('helmet');

app.use(helmet());
```
