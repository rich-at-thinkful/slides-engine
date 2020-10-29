# Event Handlers

```js
<button onClick={() => console.log("Subscribing!")}>Subscribe</button>
```

```js
const handleClick = () => {
  console.log("Subscribing!");
  alert("You subscribed!");
};

<button onClick={handleClick}>Subscribe</button>;
```