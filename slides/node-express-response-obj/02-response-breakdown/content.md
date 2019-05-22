# Inside an HTTP Response

HTTP responses...

* ... MUST include a status code
* ... SHOULD include some headers
* ... MAY include a body containing data

### Example

```
HTTP/1.1 200 OK
Date: Wed, 22 May 2019 21:38:07 GMT
Server: Apache
Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
Pragma: no-cache
Access-Control-Allow-Origin: *
Strict-Transport-Security: max-age=31536000
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/json

{"results_count":5,"data":[{},{},{},{},{}]}
```
