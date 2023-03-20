# Linked List

## Definition

A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.

[Wikipedia](https://en.wikipedia.org/wiki/Linked_list)

[GeeksForGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)

## Key points

> They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions

> The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure, because the data items need not be stored contiguously in memory or on disk.

> On the other hand, since simple linked lists by themselves do not allow random access to the data or any form of efficient indexing, many basic operations, such as obtaining the last node of the list, may require iterating through most or all of the list elements.

### Disadvantages

- They use more memory than arrays because of the storage used by their pointers.
- Nodes in a linked list must be read in order from the beginning.
- Nodes are stored noncontiguously, greatly increasing the time periods required to access individual elements within the list.
- Difficulties arise in linked lists when it comes to traversing in reverse.

## Basics and nomenclature

- Each record of a linked list is often called an 'element' or 'node'.

- The field of each node that contains the address of the next node is usually called the 'next link' or 'next pointer'. The remaining fields are known as the 'data', 'information', 'value', 'cargo', or 'payload' fields.

- The 'head' of a list is its first node. The 'tail' of a list may refer either to the rest of the list after the head, or to the last node in the list. In Lisp and some derived languages, the next node may be called the `CDR` (pronounced could-er) of the list, while the payload of the head node may be called the `CAR`.

- Node example:

```js
class Node {
  data; // The data being stored in the node
  next; // A reference to the next node, usually null for last node
}
```

## Types of Linked List

- Singley linked
  - Many operations on singly linked linear lists (such as merging two lists, or enumerating the elements in reverse order) often have very simple recursive algorithms
  - Allow tail-sharing
- Doubly linked
  - Double-linked lists require more space per node.
  - Their elementary operations are more expensive.
  - Often easier to manipulate because they allow fast and easy sequential access to the list in both directions.
- Multiply linked (rare)
- Cicular linked
  - ...Natural option to represent arrays that are naturally circular, e.g. the corners of a polygon.

## Operations and PsuedoCode

- `Iterate`

```
node := list.firstNode

 while node not null
     // do something with node.data
     node := node.next
```

- `insertBefore` - Inserting a node before an existing one cannot be done directly; instead, one must keep track of the previous node and insert a node after it.

- `insertBeginning` - Requires a separate function for lists with a special handle, e.g. `list.firstNode` or `list.head`.

```
 function insertBeginning(List list, Node newNode)
     newNode.next   := list.firstNode
     list.firstNode := newNode
```

- `insertAfter` - simple

```
function insertAfter(Node node, Node newNode)
newNode.next := node.next
node.next := newNode
```
