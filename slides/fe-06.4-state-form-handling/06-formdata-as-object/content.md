# FormData Object

* Instead of using a separate state var for each input, we store them all in one object
* Allows clearing the form in a single setter call
* Easy to set and reset initial form values
* Easy to update with single change handler

```js
const [formData, setFormData] = useState({ 
  name: "",
  email: "",
  referral: "twitter",
  age: "low",
  subscription: false,
});
```
