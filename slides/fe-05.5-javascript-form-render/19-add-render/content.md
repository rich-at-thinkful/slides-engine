# Update DOM - Render HTML to DOM

```js
const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  // Keep track of if any errors are found
  let hasErrors = false;

  // validation code skipped for brevity
  // ...

  // if there are no errors
  if (!hasErrors) {
    // create an empty object
    const park = {
      name: formData.get("parkName"),
      location: formData.get("parkLocation"),
      description: formData.get("parkDescription"),
      established: formData.get("parkEstablished"),
      area: formData.get("parkArea"),
      rating: formData.get("parkRating"),
    };

    parks.push(park);

    render();
  }
};
```