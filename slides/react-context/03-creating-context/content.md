# Creating context

```js
// UserContext.js
// Create a new context object
const UserContext = React.createContext();
```

```js
// Argument contains default values to use
// Not required, but useful for testing
const UserContext = React.createContext({
    name: 'Joe',
    setName: () => {}
});
```
