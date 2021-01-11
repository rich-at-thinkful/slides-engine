# `DOMContentLoaded` event

Fires when the HTML is fully parsed and loaded, whether the stylesheets and images are done loading or not.

```
// the code that runs once the DOM is loaded
const main = () => {
    // select the nameSorter link
    const nameSorter = document.querySelector("#nameSorter");

    // add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
...
}

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);
```