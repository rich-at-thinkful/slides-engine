# `DOMContentLoaded` event

Fires when the HTML is fully parsed and loaded, whether the stylesheets and images are done loading or not.

```
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
```
