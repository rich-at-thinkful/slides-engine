# Avoiding mutation - arrays

```js
// Bad
this.state.arr.push('value');
// Good
this.setState({
    arr: [...this.state.arr, 'value']
});
```

```js
// Bad
this.state.arr[2] = 'value';
// Good
this.setState({
    arr: this.state.arr.map((item, index) => index === 2 ? 'value' : item)
});
```

```js
// Bad
this.state.arr = this.state.splice(2, 1);
// Good
this.setState({
    arr: this.state.arr.filter((item, index) => index !== 2)
});
```
