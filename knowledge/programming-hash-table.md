# Hash Table

A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

- Load factor: n / k - n number of entries occupied in hash table - k, number of buckets
  As the load factor grows, the table becomes slower

## Collision resolution

- One method is separate chaining, which is where each bucket is made of another type of storage, e.g. a linked list, self balancing BST, dynamic array.
- Open addressing: When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found. When searching for an entry, the buckets are scanned in the same sequence, until either the target record is found, or an unused array slot is found, which indicates that there is no such key in the table.  
  Generally speaking, open addressing is better used for hash tables with small records that can be stored within the table (internal storage) and fit in a cache line. They are particularly suitable for elements of one word or less. If the table is expected to have a high load factor, the records are large, or the data is variable-sized, chained hash tables often perform as well or better. - Disadvantages: more stringent requirements of hash function. - Disadvante: Only saves memory for small entries - Advantage: Avoids time spent allocation new entries - Advantage: Better locality of reference

## Dynamic resizing

When an insert is made such that the number of entries in a hash table exceeds the product of the load factor and the current capacity then the hash table will need to be rehashed.

- All-at-once: copying all entries as the load reaches some threshold
- Incremental resizing: often used by real-time or disk based systems.
- Monotonic keys:
- Linear Hashing:
- distributed hashing

## Advantages

- The main advantage of hash tables over other table data structures is speed. This advantage is more apparent when the number of entries is large. Hash tables are particularly efficient when the maximum number of entries can be predicted in advance, so that the bucket array can be allocated once with the optimum size and never resized.
- If the set of key-value pairs is fixed and known ahead of time (so insertions and deletions are not allowed), one may reduce the average lookup cost by a careful choice of the hash function, bucket table size, and internal data structures. In particular, one may be able to devise a hash function that is collision-free, or even perfect. In this case the keys need not be stored in the table.

## Drawbacks

- Although operations on a hash table take constant time on average, the cost of a good hash function can be significantly higher than the inner loop of the lookup algorithm for a sequential list or search tree. Thus hash tables are not effective when the number of entries is very small.
- For certain string processing applications, such as spell-checking, hash tables may be less efficient than tries, finite automata, or Judy arrays. Also, if there are not too many possible keys to store—that is, if each key can be represented by a small enough number of bits—then, instead of a hash table, one may use the key directly as the index into an array of values. Note that there are no collisions in this case.
- The entries stored in a hash table can be enumerated efficiently (at constant cost per entry), but only in some pseudo-random order. Therefore, there is no efficient way to locate an entry whose key is nearest to a given key. Listing all n entries in some specific order generally requires a separate sorting step, whose cost is proportional to log(n) per entry. In comparison, ordered search trees have lookup and insertion cost proportional to log(n), but allow finding the nearest key at about the same cost, and ordered enumeration of all entries at constant cost per entry.
- If the keys are not stored (because the hash function is collision-free), there may be no easy way to enumerate the keys that are present in the table at any given moment.
- Although the average cost per operation is constant and fairly small, the cost of a single operation may be quite high. In particular, if the hash table uses dynamic resizing, an insertion or deletion operation may occasionally take time proportional to the number of entries. This may be a serious drawback in real-time or interactive applications.
- Hash tables in general exhibit poor locality of reference—that is, the data to be accessed is distributed seemingly at random in memory. Because hash tables cause access patterns that jump around, this can trigger microprocessor cache misses that cause long delays. Compact data structures such as arrays searched with linear search may be faster, if the table is relatively small and keys are compact. The optimal performance point varies from system to system.
- Hash tables become quite inefficient when there are many collisions. While extremely uneven hash distributions are extremely unlikely to arise by chance, a malicious adversary with knowledge of the hash function may be able to supply information to a hash that creates worst-case behavior by causing excessive collisions, resulting in very poor performance, e.g., a denial of service attack. In critical applications, a data structure with better worst-case guarantees can be used; however, universal hashing—a randomized algorithm that prevents the attacker from predicting which inputs cause worst-case behavior—may be preferable.

## Uses

- Associate array: i.e. dictionary, or string based index
- DB indexing, though B-trees are usually preferred.
- Cache
- Set
- Object
- Unique data representation - string pool
