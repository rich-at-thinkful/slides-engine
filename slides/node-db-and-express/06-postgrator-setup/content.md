# Postgrator CLI Setup

```bash
$ npm install postgrator-cli@3.2.0 -D
$ npm install pg
```

**postgrator-config.js**
```js
require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": process.env.NODE_ENV === 'test'
    ? process.env.TEST_DB_URL,
    : process.env.DB_URL,
}
```

**package.json**
```diff
"scripts": {
    "dev": "nodemon src/server.js",
+   "migrate": "postgrator --config postgrator-config.js",
    "start": "node src/server.js",
```
