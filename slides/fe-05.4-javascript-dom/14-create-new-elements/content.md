# Create New Elements on the DOM

`createElement()`
* creates a new element with the given tag name.

`appendChild()`
* adds a given element to the end of the list of children of a parent element.
```
// get all the park elements
const parks = document.querySelectorAll(".park");

// get the number of parks
const numberParks = parks.length;

// create a new div element
const newElement = document.createElement("div");

// assign text to the new div element
newElement.innerText = `${numberParks} exciting parks to visit`;

// get the header element
const header = document.querySelector("header");

// add the div 
header.appendChild(newElement);
```
