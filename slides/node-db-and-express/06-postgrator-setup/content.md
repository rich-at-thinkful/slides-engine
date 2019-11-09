# Postgrator CLI Setup

```bash
$ npm install postgrator-cli -D
$ npm install pg
```

**postgrator-config.js**
```js
require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": process.env.NODE_ENV === 'test'
    ? process.env.TEST_DATABASE_URL,
    : process.env.DATABASE_URL,
}
```

**package.json**
```diff
"scripts": {
    "dev": "nodemon src/server.js",
+   "migrate": "postgrator --config postgrator-config.js",
    "start": "node src/server.js",
```
