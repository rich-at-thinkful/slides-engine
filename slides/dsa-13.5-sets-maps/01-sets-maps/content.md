# Sets and maps

* Sets store a collection of keys

    ```js
    const people = new Set();
    people.add('Alice');
    people.add('Bob');

    people.has('Alice'); // True
    people.has('Carol'); // False
    ```

* Maps store key-value pairs

    ```js
    const locations = new Map();
    locations.set('Alice', 'Europe');
    locations.set('Bob', 'USA');

    locations.get('Alice'); // Europe
    locations.get('Carol'); // undefined
    ```

* Both are actually stored in arrays behind the scenes
