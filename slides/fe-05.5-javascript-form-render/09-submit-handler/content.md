# Handle a Form Submission - Create Submit Handler

`index.js`
* Handle form submission
```
const submitHandler = (event) => {
  console.log("The form was submitted");
};
```
* Add event listener for the form submission
```
const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};
```
* Invoke `main()` function when `DOMContentLoaded`
```
window.addEventListener("DOMContentLoaded", main);
```
