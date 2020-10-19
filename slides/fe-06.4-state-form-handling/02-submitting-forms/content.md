# Submitting Forms

## Capture Submission Event

```js
function SubscriberForm() {
const [name, setName] = useState("");
const handleNameChange = (event) => setName(event.target.value);

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Submitted:", name);
};

return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your Name:
        <input id="name" type="text" name="name" 
        onChange={handleNameChange} value={name}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```
