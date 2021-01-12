# Process Form Data

* Get the Data the User Entered on the Form Using `.value`

`index.js`

```
const submitHandler = (event) => {
    // get the name input
    const parkName = event.target.parkName.value;

    console.log(parkName);
};
```
* Get the Data the User Entered on the Form Using `FormData`
```
const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)
  
  const name = formData.get("parkName");
  console.log(name);
};
```