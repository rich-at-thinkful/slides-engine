# Attaching Event Handlers To Multiple Elements

```
// select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rateBtn");

// iterate the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
```