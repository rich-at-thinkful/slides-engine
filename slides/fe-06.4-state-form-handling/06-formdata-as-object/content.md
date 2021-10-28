# FormData Object

* Instead of using a separate state variable for each form element, we can store them all in one object
* Logically groups all form inputs together
* Allows clearing the form in a single setter call
* Easy to set and reset initial form values

```js
const [formData, setFormData] = useState({ 
  name: "",
  email: "",
  referral: "twitter"
});
```
