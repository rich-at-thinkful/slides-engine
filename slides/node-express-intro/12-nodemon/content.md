# Nodemon

* Restarting the server after every code change gets old very quickly
* Use the **node monitor** to constantly watch for file changes and auto-restart the server!

```
npm install -D nodemon
```

### package.json
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

```
npm run dev
```
