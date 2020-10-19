# Radio Button Input Type

```js
<fieldset>
  <legend>How old are you?</legend>
  <label htmlFor="low">
    Under 18
    <input
      id="low"
      type="radio"
      name="age"
      onChange={handleChange}
      value="low"
      checked={formData.age === "low"}
    />
  </label>
  <label htmlFor="middle">
    18 - 60
    <input
      id="middle"
      type="radio"
      name="age"
      onChange={handleChange}
      value="middle"
      checked={formData.age === "middle"}
    />
  </label>
</fieldset>
```