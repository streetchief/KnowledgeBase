# conflict free replicated data type

> In distributed computing, a conflict-free replicated data type (CRDT) is a data structure that is replicated across multiple computers in a network, with the following features:

> The application can update any replica independently, concurrently and without coordinating with other replicas.  
An algorithm (itself part of the data type) automatically resolves any inconsistencies that might occur.  
Although replicas may have different state at any particular point in time, they are guaranteed to eventually converge.

[wikipedia](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)

## Guides

- [Algorithm List](https://madebyevan.com/algos/)

## Libraries

- [Yjs](https://github.com/yjs/yjs) - A CRDT framework with a powerful abstraction of shared data.
