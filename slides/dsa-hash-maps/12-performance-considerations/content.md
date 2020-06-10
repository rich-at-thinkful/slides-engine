# Performance considerations

* The fuller the hash map, the higher the chance of collisions
* Collisions slow things down - O(n) to find an empty space
* Solution: Introduce a maximum loading factor
    * When hash map is more than N% full, move everything into a larger array (rehashing each key)

