# Initial Form State

## Store Inital Values For Form

```js
const initialFormState = {
  name: "",
  email: "",
};
```
* The initial state stored in formData is created from this object.
```js
const [formData, setFormData] = useState({ ...initialFormState });
```
* When the form is reset, a new object is created from this object.
```js
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };
  ```