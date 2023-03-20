# Graphs

- Directed (one way edge traversal) or un-directed (two way edge traversal)
- If every pair of verticies have an edge, the graph is 'connected'

## Adjaceny List

- Each node stores a list of connections, either nodes or edges.
- Can be created as an array or hash of lists instead of objects/classes

## Adjaceny Matrix

- NxN boolean matrix where N is number of nodes, and true indicates a connecting edge

## Third way is ???

## Graph search

### DFS

- Depth first: Pick a node and explore branch completely.
- Generally DFS preferred for visiting all nodes.
- Pre-order search with tracking node visits

### BFS

- Breadth First: Pick a branch and explore each neighbor first
- Generally BFS preferred for shortest path aglos.
- Use a queue for tracking nodes to visit
- Bidirectional search: find shortest path, uses two BFS one from each node.

- [graph-data-structure-and-algorithms/](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
- [breadth-first-traversal-for-a-graph](https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/)
- [depth-first-traversal-for-a-graph](https://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)
