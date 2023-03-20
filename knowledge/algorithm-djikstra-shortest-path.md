# Djikstra's Shortest Path

## Definition

Dijkstra's, a.k.a Dijkstra's Shortest Path First, or DSPF, algorithm, is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.

[Wikipedia Entry](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

[GeeksForGeeks Entry](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/)

## Key points

Given a graph, DSPF uses memory to create data structures for storing additional information about a graph, such as a shortest distance store, a previously visited store, and a visited set. DSPF then begings analyzing different routes starting from some particular node to find the shortest paths from that node to all the other nodes.

### Advantages

<!-- TODO -->

### Disadvantages

<!-- TODO -->

## Additional Information

<!-- TODO -->

## PsuedoCode

### English Language

- create shortest distance map (node to shortest distance)
- create previous map (previous node on the shortest distance path to x)
- create visited set

- Initialize the stores
  - set node -> infinity for distance store
  - set node -> undefined for previous store
- for starting node, set distance to 0

- visit a vertex
- store vertex in visited
- get neighbors
- calculate shortest path from starting node to current node's neighbors

### Programmatic

## Implementation

<details>
<summary>Javascript Implementation</summary>

```js
export class WeightedGraph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) this.list[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.list[v1].push({ node: v2, weight: Number(weight) });
    this.list[v2].push({ node: v1, weight: Number(weight) });
  }

  shortestPath(start = "A", end = "E") {
    const shortestDistances = new Map();
    const previous = new Map();
    const visited = new Set();
    const nodes = Object.keys(this.list);
    const numNodes = nodes.length;

    nodes.forEach((node) => {
      shortestDistances.set(node, Infinity);
      previous.set(node, undefined);
    });

    shortestDistances.set(start, 0);
    let cursor = start;

    while (visited.size < numNodes) {
      if (cursor === end) {
        return getShortestPath();
      }

      visited.add(cursor);
      const neighbors = this.list[cursor];

      neighbors
        .filter((node) => !visited.has(node.node))
        .forEach((neighbor) => {
          updateDistance(cursor, neighbor);
        });

      let toVisit = this.pickVertex(neighbors, visited);
      cursor = toVisit && toVisit.node;
    }

    return getShortestPath();

    function updateDistance(vertex, neighbor) {
      const neighborWeight = neighbor.weight;
      const neightborVertex = neighbor.node;
      const prevWeight = shortestDistances.get(vertex) || 0;
      const totalWeight = neighborWeight + prevWeight;
      const neighborMin = shortestDistances.get(neightborVertex);

      if (totalWeight < neighborMin) {
        shortestDistances.set(neightborVertex, totalWeight);
        previous.set(neightborVertex, vertex);
      }
    }

    function getShortestPath() {
      const res = [];
      let cursor = end;

      while (cursor) {
        res.unshift(cursor);
        cursor = previous.get(cursor);
      }

      return res;
    }
  }

  // This is usually implemented with a Priority Queue
  pickVertex(subset, exclude) {
    let smallestVertex;
    let smallest = Infinity;

    subset.forEach((node) => {
      if (node.weight < smallest && !exclude.has(node.node)) {
        smallestVertex = node;
        smallest = smallestVertex.weight;
      }
    });

    return smallestVertex;
  }
}
```

</details>
