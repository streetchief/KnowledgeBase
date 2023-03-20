# Heap

## Definition

- A Heap is a special Tree-based data structure in which the tree is an almost complete binary tree. Generally, Heaps can be of two types, min or max, and are sorted with a min or max value at the root.

[Wikipedia Entry](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)

[GeeksForGeeks Entry](https://www.geeksforgeeks.org/binary-heap/)

## Key points

- Binary Heaps can be stored as a single array. For zero indexed array with index `n`:
  - Children are at `2n + 1` and `2n + 2`
  - Parent is at `floor((n - 1) / 2)`
- The heap is one maximally efficient implementation of an abstract data type called a priority queue

### Advantages

- O (1) removal
- O (logN) search

### Disadvantages

- Memory overhead for storing methods

## Basics and nomenclature

All Binary heaps:

- are complete and have a root. Complete is defined as
  > All levels are completely filled except possibly the last level, and the last level has all keys as left as possible
- For a Min Heap, each node is smaller than its children, and the root is minimum
- For a Max Heap, each node is larger than its children and the root is maximum

## Types of

- Min Heap
- Max Heap
- Fibonacci Heap - excellent amortized operations by using multiple heaps

## Uses of

- [Wikipedia Entry](https://en.wikipedia.org/wiki/Priority_queue)

## Methods, Operations, and PsuedoCode

### Essential

- `insert` - O(logN) time

  1. Insert in bottom level, lowest and leftmost position
  2. Swap with parent node until tree is correct, a.k.a Sift/Bubble Up

- `extract_min`, `extract_max` - O(logN) time
  1. Extract root
  2. Swap last element into root position
  3. Swap with children until tree is correct, a.k.a Sift/Bubble Down
  4. Return extracted root

### Common/Optional

- `replace`, `decrease`, `delete` - these all involve modifying the value of a node, then resorting the tree as necessary

## Implementation

<details>
<summary>Javascript implementation</summary>

```js
class MaxHeap {
  constructor() {
    this.values = [];
  }

  getChildIndex(idx) {
    const timesTwo = idx * 2;
    return [timesTwo + 1, timesTwo + 2];
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIdx = this.getParentIndex(index);
      let parent = this.values[parentIdx];
      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let [leftIdx, rightIdx] = this.getChildIndex(idx);
      let leftChild;
      let rightChild;
      let swapIdx;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) swapIdx = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];

        if ((!swapIdx && rightChild > element) || (swapIdx && rightChild > leftChild)) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx == undefined) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      idx = swapIdx;
    }
  }
}
```

</details>
