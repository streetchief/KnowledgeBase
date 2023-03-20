# Queue

## Definition

A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and removal from the other.

[Wikipedia Entry](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)

[GeeksForGeeks](https://www.geeksforgeeks.org/queue-data-structure/)

## Key points

> FIFO - First In, First Out

> Elements are added to the back, tail, or rear, and are removed from the head or front.

> A Queue provides a service where various entities such as data, objects, persons, or events are stored and held to be processed later.

### Advantages

- Maintains a particular order
- A doubly linked list [and therefore a queue], has O(1) insertion and deletion at both ends.

### Disadvantages

- Finding an item is O(n)

## Basics and nomenclature

> By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front.

> The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as dequeue. Other operations may also be allowed, often including a peek or front operation that returns the value of the next element to be dequeued without dequeuing it.

- Basic Javascript implementation:

  ```js
  class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      return this.items.shift();
    }
  }
  ```

## Types of

- Circular buffer
- Double-ended queue (deque)
- [Priority queue](https://en.wikipedia.org/wiki/Priority_queue)
- [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)

## Uses of

- Disk scheduling - threads are allotted time to run during idle
- Buffering - data can be pushed in a buffer can be read out later
- Async load management, e.g. JS event loop queue, service mesengers such as RabbitMQ

## Methods, Operations, and PsuedoCode

### Essential

- `enqueue`
- `dequeue`

## Common Optional

- `peek`/`front` - examine the first element without removing it
