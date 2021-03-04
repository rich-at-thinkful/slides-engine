# Controlled Components

## Store the value of the input in state

```js
function SubscriberForm() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);

  console.log("Current value of name:", name);
  return (
    <form>
      <label htmlFor="name">
        Enter Your Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
    </form>
  );
}
```
