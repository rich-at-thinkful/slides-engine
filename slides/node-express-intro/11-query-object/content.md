# Query Object

* The request object also holds the **query object** which Express provides after parsing the query string from the URL

### The request with query string:
```text {data-span="1:33:80 .highlight"}
http://localhost:8080/greetings?name=Rich&race=human
```

<div class="fragment" data-index="1">

### Express creates query object:

```js
req.query === { name: 'Rich', race: 'human' }
```

</div>

### Example route: {.fragment data-index="2"}

```js {.fragment data-index="2"}
app.get('/greetings', (req, res) => {
  if (!req.query.name || !req.query.race) {
    return res.status(400).send('Invalid request');
  }

  res.send(`Your name is ${req.query.name} and your race is ${req.query.race}`);
});
```

