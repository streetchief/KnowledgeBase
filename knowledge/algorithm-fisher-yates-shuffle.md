# Fisher-Yates Shuffle a.k.a. Knuth Shuffle

## Description

Uniform distribution in-place shuffle, given a function that gets a random number (which is not necessarily a given)

## Solution

We choose a random item to move to the first index, then we choose a random other item to move to the second index, etc.

```js
function shuffle(array) {
  // Shuffle the input in place
  // for each index except the last
  // pick a random index from between index and last element
  // store the value in the current index in a temp var
  // move random index value into current index
  // move temp val into random index

  for (let i = 0; i < array.length; i++) {
    const randomIndex = getRandom(i, array.length - 1);

    if (randomIndex === i) continue;

    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
```
