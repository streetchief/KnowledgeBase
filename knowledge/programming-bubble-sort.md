# Bubble Sort

## Definition

<!-- TODO -->

[Wikipedia Entry](https://en.wikipedia.org/wiki/)

[GeeksForGeeks Entry](https://www.geeksforgeeks.org/selection-sort/)

## Key points

### Advantages

### Disadvantages

## Additional Information

## PsuedoCode

### English Language

1. For each element index `i` from the end of the array to the beginning
2. For each element index `j` from the beginning to i - 1
3. If `arr[j]` is greater than `arr[j + 1]`, swap those two values
4. Return the sorted array

### Programmatic

## Implementation

<details>
<summary>Javascript Implementation</summary>

```js
function bubbleSort(arr, fn) {
  const comparator = typeof fn === "function" ? fn : (x, y) => x - y;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) swap(arr, j, j + 1);
    }
  }

  return arr;
}

function swap(arr, i1, i2) {
  [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
}
```

</details>
