# A component with props

```js
// Props are passed as the first parameter to the function
// It will be an object containing the various properties
function WelcomeBack(props) {
  return <p>Welcome back, {props.name}!</p>;
}
```

`index.js`
```
ReactDOM.render(
  <div>
    <WelcomeBack name="Joe" />
  </div>,
  document.getElementById("root")
);
```
