# Quicksort

* Differs from merge-sort in that it operates in-place
* This generally makes it more efficient, although it has a worse worst-case performance
* The process:
    * Chose a pivot element
    * Partition the other elements into those greater than, and less than, the pivot
    * Recursively sort the two partitions
    * Insert the pivot back into the middle
