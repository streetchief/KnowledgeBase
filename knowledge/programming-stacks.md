# Stack

## Definition

A stack is an abstract data type that serves as a collection of elements.

[Wikipedia Entry](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>)

[GeeksForGeeks](https://www.geeksforgeeks.org/stack-data-structure/)

## Key points

> LIFO (last in, first out)

> ...the push and pop operations occur only at one end of the structure, referred to as the top of the stack.

> A common use of stacks at the architecture level is as a means of allocating and accessing memory e.g. call stack.

## Basics and nomenclature

```js
class Stack {
  maxSize: number;
  size: number;
  items: any[];
}
```

## Uses

- Backtracking - store points we have visited, e.g. depth-first search.

- Memory management - Almost all calling conventions‍—‌the ways in which subroutines receive their parameters and return results‍—‌use a special stack (the "call stack") to hold information about procedure/function calling and nesting in order to switch to the context of the called function and restore to the caller function when the calling finishes.

## Operations and PsuedoCode

- `push` - ...which adds an element to the collection.
- `pop` - ...which removes the most recently added element.

### Common, Non-essential operations

- `peek` - Look at the top element without removing it.
- `duplicate` - The top item is popped, and then pushed again (twice), so that an additional copy of the former top item is now on top, with the original below it.
- `swap` - the two topmost items on the stack exchange places.
- `rotate` - the n topmost items are moved on the stack in a rotating fashion.
