# Radio Button Input Type

```js
function SubscriberForm() {
  const [age, setAge] = useState("");
  const handleChange = (event) => setAge(event.target.value);
  
  return (
    <form>
      <fieldset>
        <legend>How old are you?</legend>
        <label htmlFor="low">
          Under 18
          <input id="low" type="radio" name="age"
            onChange={handleChange} value="low"
            checked={age === "low"}
          />
        </label>
        <label htmlFor="middle">
          18 - 60
          <input id="middle" type="radio" name="age"
            onChange={handleChange} value="middle"
            checked={age === "middle"}
          />
        </label>
      </fieldset>
    </form>
  );
}
```