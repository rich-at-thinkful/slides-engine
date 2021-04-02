# Form Validation

`index.js`
```
const submitHandler = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const errors = validateForm(formData);

  // clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // display any new errors
  Object.keys(errors).forEach((key) => {
    // find the specific error element
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });
};
```
