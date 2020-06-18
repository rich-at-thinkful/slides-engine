# Cache locality

* CPU reading values directly from RAM is slow
* CPUs introduced caches
    * Don't just load in one piece of information, but load in all of the stuff around it too
    * Assumption: you are likely to use also data in memory addresses near the current memory address
* Arrays are stored in contiguous memory
    * Great for caches - all of the data is close together
* Linked lists are stored in non-contiguous memory
    * Bad for caches - the data is spread throughout the RAM
