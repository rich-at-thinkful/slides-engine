# Checkbox Input Type

```js
<label htmlFor="subscription">
  Receive email notifications?
  <input
    id="subscription"
    type="checkbox"
    name="subscription"
    onChange={handleChange}
    checked={formData.subscription}
    value="subscription"
  />
</label>
```
```js
const handleChange = ({ target }) => {
  const value = target.type === "checkbox" ? target.checked : target.value;
  setFormData({
    ...formData,
    [target.name]: value,
  });
};
```