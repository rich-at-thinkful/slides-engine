# Traditional POST - no AJAX

## HTML Form {.smaller}

```html

<form method="POST" action="/auth/login">
  <label for="username">Username: </label>
  <input type="text" name="user" id="username" />
  <label for="password">Password: </label>
  <input type="password" name="pw" id="password"/>
  <input type="submit" value="LOGIN" />
</form>
```

## Resulting HTTP POST request example: {.smaller}

<div class='row'>
<div class='cell-4'>

``` {#post-example-1 data-span="11:1:16 .fragment data-style=highlight-in data-index=3"}
POST /auth/login HTTP/1.1
Host: localhost:8000
Accept-Language: en-us
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
Content-Length: 37
Connection: Keep-Alive
Cache-Control: no-cache

user=stan&pw=lee
```

</div>
<div class='cell-2 smallest'>

default content type set by browser from form {.annotation data-for=post-example-1 data-line=4 .fragment data-index=1}

request body MUST occur after two sequential line breaks from header {.annotation data-for=post-example-1 data-line=11 .fragment data-index=2}

key-val pair based on HTML input's `name` and `value` attributes {.annotation data-for=post-example-1 .fragment data-index=3}

</div>
</div>