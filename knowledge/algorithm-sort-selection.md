# Selection Sort

## Definition

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1. The subarray which is already sorted.
2. Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

[Wikipedia Entry](https://en.wikipedia.org/wiki/Selection_sort)
[GeeksForGeeks Entry](https://www.geeksforgeeks.org/selection-sort/)

## Key points

### Advantages

### Disadvantages

## Additional Information

## PsuedoCode

### English Language

1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4. If the "minimum" is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array is sorted.

### Programmatic

- For every item index `i` to `length`
  - Set min to item
  - For every other element from `i + 1` to `length`
    - If element is less than min
      - Store index
      - Set next number as new min
    - If min is not equal item
      - Swap elements

## Implementation

<details>
    <summary>Javascript Implementation</summary>

```js
function selectionSort(nums) {
  let min;

  for (let i = 0; i < nums.length; i++) {
    min = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    swap(s[i], s[min]);
  }
}
```

</details>

<details>
    <summary>Javascript Implementation with comparator</summary>

```js
function selectionSort(arr, fn) {
  const comparator = typeof fn === "function" ? fn : (x, y) => x - y;

  for (let ord = 0; ord < arr.length; ord++) {
    let min = arr[ord];
    let minIndex = ord;

    for (let cursor = ord + 1; cursor < arr.length; cursor++) {
      const nextNum = arr[cursor];

      if (comparator(min, nextNum) > 0) {
        min = nextNum;
        minIndex = cursor;
      }
    }

    if (min !== arr[ord]) swap(arr, ord, minIndex);
  }

  return arr;
}

function swap(arr, i1, i2) {
  [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
}
```

</details>
