# Creating context

```js
// UserContext.js
// Create a new context object
// Argument contains default values to use - useful for testing
const UserContext = React.createContext({
    name: 'Joe',
    setName: () => {}
});
```
