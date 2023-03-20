# Trees

## Binary tree

- Each node has up to two children
- Balanced: tree maintains O(n) `insert` and `find`
- Complete: Every level filled, except possibly the last, and then left to right
- Full: Every node zero or two children
- Perfect: Full and Complete. 2^k - 1 nodes where k is levels

## Binary Search Tree

- all left descendents <= root < all right decendents
- nodes = 2^n - 1
- branches = 2^n ?
- depth ~= log(nodes)
- Binary search requires an order relation by which every element (item) can be compared with every other element in the sense of a total preorder.

### Traversal

- In-Order: left, current, right
  - An in-order traversal of a binary search tree will always result in a sorted list of node items (numbers, strings or other comparable items).
  - Recursive or iterative
- Pre-Order: current, left, right
- Post-Order: left, right, current

### Operations

- Search
  - Iteratively or recursively
- Insert
  - Begins as search
  - Recursive or iterative solutions
- Delete
  - Deleting a node with no children: simply remove the node from the tree.
  - Deleting a node with one child: remove the node and replace it with its child.
  - Deleting a node with two children. Do not delete D. Instead, choose either its in-order predecessor node or its in-order successor node as replacement node

### Verification

- if the node is the left child of its parent, then it must be smaller than (or equal to) the parent and it must pass down the value from its parent to its right subtree to make sure none of the nodes in that subtree is greater than the parent
- if the node is the right child of its parent, then it must be larger than the parent and it must pass down the value from its parent to its left subtree to make sure none of the nodes in that subtree is lesser than the parent.
- As pointed out in section Traversal, an in-order traversal of a binary search tree returns the nodes sorted. Thus we only need to keep the last visited node while traversing the tree and check whether its key is smaller (or smaller/equal, if duplicates are to be allowed in the tree) compared to the current key.

### Uses

- In practice, the added overhead in time and space for a tree-based sort (particularly for node allocation) make it inferior to other asymptotically optimal sorts such as heapsort for static list sorting. On the other hand, it is one of the most efficient methods of incremental sorting, adding items to a list over time while keeping the list sorted at all times.
- Binary search trees can serve as priority queues

### Types

There are many types of binary search trees. AVL trees and red-black trees are both forms of self-balancing binary search trees. A splay tree is a binary search tree that automatically moves frequently accessed elements nearer to the root. In a treap (tree heap), each node also holds a (randomly chosen) priority and the parent node has higher priority than its children. Tango trees are trees optimized for fast searches. T-trees are binary search trees optimized to reduce storage space overhead, widely used for in-memory databases

# Tries

- Sometimes called a prefix tree, often used to store words, where each node is a character.
  - or null node represents word termination, sort of memoization.
