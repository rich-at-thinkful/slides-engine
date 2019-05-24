# Cross-Origin Resource Sharing (CORS)

* Security policy to prevent attacks
* Policy is declared in the HTTP response headers

* Whenever an HTTP request is made with JavaScript, all modern web browsers broadcast the **origin server** name of the current HTML file displayed (e.g. <span style="color: blue;">chase.com</span>) {.fragment data-index="1"}
* It's up to the server if it wants to permit the request {.fragment data-index="2"}
  * This is known as a CORS policy {.smaller .fragment data-index="2"}
* Many APIs will permit direct requests (e.g. Curl CLI, the Postman tool) but will be stricter when it comes from a web browser JavaScript request, as those can be more easily subverted {.fragment data-index="3"}

