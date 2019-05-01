# Mapping over data

```js
function PersonList(props) {
    const peopleData = [{
        id: 10,
        name: 'Rich'
    }, {
        id: 11,
        name: 'Joe'
    }, {
        id: 22,
        name: 'Chris'
    }, {
        id: 26,
        name: 'Tauhida'
    }];

    // If you have an array as an input, you can map over it to
    // create child components
    const people = peopleData.map(person =>
        <Person key={person.id} name={person.name} />
    );

    return (
        <div className="personList">
            <h3>Person List</h3>
            {people}
        </div>
    );
};
```
