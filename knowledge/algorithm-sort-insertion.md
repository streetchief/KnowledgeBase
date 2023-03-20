# Insertion Sort

## Definition

Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list.

At each iteration, insertion sort removes one element from the input, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

[Wikipedia Entry](https://en.wikipedia.org/wiki/Insertion_sort)

[GeeksForGeeks Entry](https://www.geeksforgeeks.org/data-structures)

## Key points

### Advantages

- Efficient for (quite) small data sets, similar to but better than other quadratic (`O (n^2)`) sorting algorithms like Selection or Bubble sort.
- Adaptive, i.e. efficient for data sets that are already substantially sorted
- Stable, i.e. does not change the relative order of elements with equal keys
- In-place, i.e. only requires a constant amount O(1) of additional memory space
- Online, i.e., can sort a list as it receives it
- `O(n)` best case time complexity

### Disadvantages

- `O(n^2)` is the worst case time complexity

## Additional Information

- Insertion sort is very similar to selection sort. As in selection sort, after k passes through the array, the first k elements are in sorted order. However, the fundamental difference between the two algorithms is that insertion sort scans backwards from the current key, while selection sort scans forwards. This results in selection sort making the first k elements the k smallest elements of the unsorted input, while in insertion sort they are simply the first k elements of the input.
- In general, insertion sort will write to the array `O(n^2)` times, whereas selection sort will write only `O(n)` times.
- While some divide-and-conquer algorithms such as quicksort and mergesort outperform insertion sort for larger arrays, non-recursive sorting algorithms such as insertion sort or selection sort are generally faster for very small arrays (the exact size varies by environment and implementation, but is typically between 7 and 50 elements). Therefore, a useful optimization in the implementation of those algorithms is a hybrid approach, using the simpler algorithm when the array has been divided to a small size.

## PsuedoCode

### English Language

1. Start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary.
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.

### Programmatic

The following are for zero based arrays.

- Swap elements on every iteration:

```
i ← 1
while i < length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
    i ← i + 1
end while
```

- Moves sorted and swap at the end:

```
i ← 1
while i < length(A)
    x ← A[i]
    j ← i - 1
    while j >= 0 and A[j] > x
        A[j+1] ← A[j]
        j ← j - 1
    end while
    A[j+1] ← x
    i ← i + 1
end while
```

- Can be implemented recursively (but it only increases the memory needed):

```
function insertionSortR(array A, int n)
     if n > 0
        insertionSortR(A, n-1)
        x ← A[n]
        j ← n-1
        while j >= 0 and A[j] > x
            A[j+1] ← A[j]
            j ← j-1
        end while
        A[j+1] ← x
     end if
 end function
```

## Implementation

<details>
<summary>Javascript Implementation</summary>

```
function insertionSort(inputArr) {
    let length = inputArr.length;

    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;

        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }

        inputArr[j + 1] = key;
    }

    return inputArr;
}
```

</details>
