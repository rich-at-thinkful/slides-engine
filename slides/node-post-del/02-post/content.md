# POST

* HTTP request used to send data and expect it to be stored by server in some way
* Header should include `Content-Type` denoting the format of data sent
* Actual data is included in the request **body**
* Data can be text/binary
* Web applications will typically use forms to collect and submit the data

<div class="fragment" data-index=1>

## Example Content Types

<div class="smallest">

* `application/x-www-form-urlencoded`: key-value pairs separated by &
* `multipart/form-data`: form binary data
* `application/json`: JSON text format
* `application/xml`: XML text format
* `text/plain`

</div>

* [Incomplete List of Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types){target=_blank}

</div>