# Passing props to a component

```js
function PersonList() {
    // You can create more than one Person, changing its name
    return (
        <div className="personList">
            <h3>Person List</h3>
            <Person name="Rich" />
            <Person name="Joe" />
            <Person name="Chris" />
            <Person name="Tauhida" />
        </div>
    );
}
```
