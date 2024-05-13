# Sliding Window

## Sample Problems

- Maximum sum sub-array of size `n` (easy)
- Longest substring with `n` distinct characters (medium)
- String anagrams (hard)

## Max Sub-Array Sum

Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of `n` consecutive elements in the array.

<details>
<summary>Naive</summary>

```js
function maxSubArraySum(arr, num) {
  if (arr.length < num) {
    return;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
```
</details>

<details>
<summary>O(n)</summary>

```js
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
```

</details>

## Moving Median

```js

```