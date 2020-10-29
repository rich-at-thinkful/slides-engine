# Update DOM - Render HTML to DOM

`index.js`
```
const render = () => {
  // get the parent element
  const main = document.querySelector("main");

  // 1. empty the parent element
  main.innerHTML = "";

  // 2. get the parks HTML
  const content = parks.map(renderOnePark).join("");

  // 3. Set innerHTML of parent element
  main.innerHTML = content;
};
```
```
const main = () => {
  // all the existing code

  render();
};
```