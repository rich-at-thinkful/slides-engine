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
  "host": process.env.MIGRATION_DB_HOST,
  "port": process.env.MIGRATION_DB_PORT,
  "database": process.env.MIGRATION_DB_NAME,
  "username": process.env.MIGRATION_DB_USER,
  "password": process.env.MIGRATION_DB_PASS
}
```

**package.json**
```diff
"scripts": {
    "dev": "nodemon src/server.js",
+   "migrate": "postgrator --config postgrator-config.js",
    "start": "node src/server.js",
```
