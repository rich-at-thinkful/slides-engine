# Avoiding mutation - objects

```js
// Bad
this.state.obj.key = 'value';
// Good
this.setState({
    obj: {
        // Order is important!
        ...this.state.obj,
        key: 'value'
    }
});
```

```js
// Bad
delete this.state.obj.key;
// Good
const {key, ...rest} = this.state.obj;
this.setState({
    obj: rest
});
```
