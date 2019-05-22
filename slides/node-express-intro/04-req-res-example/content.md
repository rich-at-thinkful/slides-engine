# Request and Response

<div class="row">

<div class="cell-2">

### Request
```text
GET /blog HTTP/1.1
Host: localhost:8080
User-Agent: curl/7.54.0
Accept: */*
```

### Response
```text
HTTP/1.1 200 OK
Content-Type: text/html

<html>
<body>
<h1>Welcome to My Blog</h1>
</body>
</html>
```

</div>
<div class="cell-4 fragment" data-index="1">

### Request with Curl

```
$ curl http://localhost:8080/blog
```

### Response with Node using "Net" core module

```javascript
const net = require('net');

const server = net.createServer((client) => {
  client.on('data', data => {
    console.log(data.toString());
  });

  client.write("HTTP/1.1 200 OK\n");
  client.write("Content-Type: text/html\n");
  client.write("\n");
  client.write("<html>\n");
  client.write("<body>\n");
  client.write("<h1>Welcome to My Blog</h1>\n");
  client.write("</body>\n");
  client.end();
});

server.listen(8080, () => console.log('Server on 8080'));
```

</div>
</div>