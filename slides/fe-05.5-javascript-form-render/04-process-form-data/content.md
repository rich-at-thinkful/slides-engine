# Process Form Data

* Get the Data the User Entered on the Form Using `.value`

`index.js`

```
const submitHandler = (event) => {
    // get the name input
    const parkName = document.querySelector("#parkName").value;

    console.log(parkName);
};
```
* Get the Data the User Entered on the Form Using `FormData`
```
const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#parkForm");
  const formData = new FormData(form);
  
  const name = formData.get("parkName");
  console.log(name);
};
```