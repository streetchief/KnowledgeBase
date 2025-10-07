# Hashing Algorithms

## Consistent Hashing
From the [Wikipedia](https://en.m.wikipedia.org/wiki/Consistent_hashing) article: 
"In computer science, consistent hashing is a special kind of hashing technique such that when a hash table is resized, only n / m keys need to be remapped on average where n  is the number of keys and m is the number of slots. In contrast, in most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped because the mapping between the keys and the slots is defined by a modular operation.

Consistent hashing evenly distributes cache keys across shards, even if some of the shards crash or become unavailable."

## Rendezvous Hashing

From the [Wikipedia](https://en.m.wikipedia.org/wiki/Rendezvous_hashing) article:

"Rendezvous or highest random weight (HRW) hashing is an algorithm that allows clients to achieve distributed agreement on a set of k options out of a possible set of n  options. A typical application is when clients need to agree on which sites (or proxies) objects are assigned to."