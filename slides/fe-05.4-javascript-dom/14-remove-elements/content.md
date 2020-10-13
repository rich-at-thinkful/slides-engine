# Remove elements from the DOM

`removeChild()`
* removes the provided node from the DOM.

```
// get the parent element of all parks
const main = document.querySelector("main");

//select a single park
const park = main.querySelector(".park");

// remove that park
main.removeChild(park);
```