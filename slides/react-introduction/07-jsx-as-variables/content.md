# JSX as variables

<div class="row">

<div class="cell-3">

```js
function PersonList() {
    return (
        <div className="personList">
            <h3>Person List</h3>
            <ul>
                <li>Joe</li>
                <li>Alice</li>
                <li>Bob</li>
            </ul>
        </div>
    );
}
```

</div>

<div class="cell-3">

```js
function PersonList() {
    // You can use JSX as a regular variable
    const person = <li>Joe</li>;
    // Arrays are rendered too
    const people = [<li>Alice</li>, <li>Bob</li>];
    return (
         <div className="personList">
            <h3>Person List</h3>
            <ul>
                {person}
                {people}
            </ul>
        </div>
    );
};
```

</div>
</div>
