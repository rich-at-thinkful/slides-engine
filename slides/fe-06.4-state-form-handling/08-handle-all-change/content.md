# Standardize handleInputChange()

* Instead of a function for each input, let's use a standard handler:

```js
const handleInputChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};
```

* We dynamically assign the `formData` prop being updated based on the input element name field