# Process Data

* Examples
    * Updates
    * Sorting
    * Filtering
    * etc.

```
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.name;
    const parkBName = parkB.name;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
};
```