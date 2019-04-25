# A component with props

```js
// Props are passed as the first parameter to the function
// It will be an object containing the various properties
function Person(props) {
    return (
        <div className="person">
            {props.name}
        </div>
    );
};

// If you don't provide one of the props, it will be undefined
// To avoid that have the defaultProps
Person.defaultProps = {
    name: ''
};
```
