# System Design


## Guides

- [system-design-primer](https://github.com/donnemartin/system-design-primer) - Really good system design guides by Donne Martin
- [Front end system design](https://pietropassarelli.com/front-end-system-design.html) - Front end design system by pietro passarelli
- [awesome scalability](https://github.com/binhnguyennus/awesome-scalability)
- [awesome-distributed-systems](https://github.com/theanalyst/awesome-distributed-systems)
- [System Design Interviews](https://github.com/DreamOfTheRedChamber/system-design-interviews)
- [System Design for Tech Interviews](https://www.hiredintech.com/courses/system-design)

## Paid Courses

- [Grokking Modern System Design Interview for Engineers & Managers](https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers)
- [SystemsExpert](https://www.algoexpert.io/systems/product)

## Books

- [Designing Data-Intensive Applications](https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications)
- [System Design Interview - An Insider's Guide](https://www.goodreads.com/book/show/54109255-system-design-interview-an-insider-s-guide)
- [System Design Interview - An Insider's Guide Volume 2](https://www.goodreads.com/book/show/60631342-system-design-interview-an-insider-s-guide)

## Videos

- [System Design: Foundations for Great Human Experience](https://www.youtube.com/watch?v=n17V0G9X2zw)
- [How to Prepare for a System Design Interview](https://www.youtube.com/watch?v=v20cBCW433s)

## Overview

System design and architecture is concerned with S.R.A.E.S.

### Scalability:

Scalability is the capability of a system, process, or a network to grow and manage increased demand.

### Reliability:

By definition, reliability is the probability a system will fail in a given period.

### Availability:

By definition, availability is the time a system remains operational to perform its required function in a specific period.

### Efficiency:

Two standard measures of [a distributed system that delivers a set of items as result] efficiency are

- the response time (or latency) that denotes the delay to obtain the first item and
- the throughput (or bandwidth) which denotes the number of items delivered in a given time unit (e.g., a second).

### Serviceability or Manageability:

Serviceability or manageability is the simplicity and speed with which a system can be repaired or maintained; if the time to fix a failed system increases, then availability will decrease.

## Load Balancing

Load Balancers can be added at multiple levels to balance network traffic over multiple devices like web servers, thereby reducing load on any given single node.

Load balancers perform the following operations:

- Health checks on available server pool
- Traffic Forwarding to pool

### More Info

- https://en.wikipedia.org/wiki/Load_balancing_(computing)

## Caching

Caching is used to speed of delivery of responses by storing previous responses; caches are ideally closer to the client than servers.

### Types of Caches

- in memory
- network request caching
- static asset caching, i.e. Content Delivery Network (CDN)

Caching strategies:

- Write-through: write to cache and db simultaneously
- Write-around: only write to db, let cache be updated later
- Write-back: write to cache, and later to db
- Cache aside? check cache, if miss, read db, update cache, return data
- refresh ahead?

Cache Eviction Strategies:

- FIFO: First In, First Fut (queue)
- LIFO: Last In, First Out (stack)
- LRU: Least Recently Used
- MRU: Most Recently Used
- LFU: Least Frequently Used
- RR: Random Replacement

### More Info

- https://en.wikipedia.org/wiki/Cache_(computing)

## Data Partitioning

The methods by which one can break down larger databases or tables into smaller pieces, that can be distributed.

### Methods

#### Horizontal Partitioning

Put different rows into different tables, e.g. user ids less than 10,000 in one table, and greater than, in another.
A.K.A. Range-Based Partitioning
A.K.A. Data Sharding

Con: Picking the correct range is difficult due to unknown distribution of data.
Solution: Analyze existing distribution for information.

#### Vertical Partitioning

Feature based partitioning, e.g. user data on one server, messaging on another, and mail on a third.

Con: Each feature will probably require further partitioning after growth.

#### Directory Partitioning

Use a directory service to locate abstracted, distributed data somewhere in the system.

Con: Additional runtime overhead of lookup calls. Additional point of failure.

### Determining Partitions

#### Key/Hash Partitioning

Use a hash function on key attributes of the row to determine the row's partition.

Con: Hash function will effectively fix partition pool size.
Solution: Use Consistent Hashing.

#### List Partitioning

Each partition is assigned a list of possible values from a row's column, e.g. Country, and any row with that value will be sorted into a given partition. E.g. Iceland, Norway, Sweden, Finland, or Denmark will be stored in a partition for the Nordic countries.

#### Round-Robin Partitioning

Simply row index mod pool size, i.e. first row in first partition, second row in second partition, etc..

#### Composite Partitioning

Combine the above strategies for a more complicated algorithm to determine partition.
Consistent Hashing could be considered a composite of hash and list partitioning where the hash reduces the key-space to a size that can be listed.

### Common Partitioning Problems

Distributing data makes re-assembling that data harder.

#### Joins

Joins might be across tables on different servers. Can de-normalize data to speed up, at the risk of inconsistencies.

#### Referential Integrity

Enforcing constraints on foreign key table data is basically impossible?
Sometimes run SQL jobs to clean up dangling references.

#### Re-balancing

When a particular partition becomes very hot, i.e. lots of reads and writes, we need to reduce load.
This can be due to poor data distribution, or lack of partitioning.
We either create more partitions or re-balance existing ones.
Directory partitioning makes re-balancing easier, but is complex.

## Indexes

> The goal of creating an index on a particular table in a database is to make it faster to search through the table and find the row or rows that we want. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records.

> An index can dramatically speed up data retrieval but may itself be large due to the additional keys, which slow down data insertion & update.

> When adding rows or making updates to existing rows for a table with an active index, we not only have to write the data but also have to update the index... To reiterate, adding indexes is about improving the performance of search queries.

### More Info

- https://en.wikipedia.org/wiki/Database_index

## Proxies

A proxy server is an intermediate piece of software or hardware that sits between the client and the server to facilitate traffic.

Typically, proxies are used to cache data, filter requests, log requests, or transform requests (by adding/removing headers, encrypting/decrypting, or compressing a resource).

### Forward Proxy

Essentially, the forward proxy is a piece of software or hardware that facilitates the request for resources from other servers on behalf of clients, and can anonymize the client as well.

Forward Proxies can combine the same data access requests into one request and then return the result; this technique is called Collapsed Forwarding.

### Reverse Proxy

A reverse proxy retrieves resources from one or more servers on behalf of a client. These resources are then returned to the client, appearing as if they originated from the proxy server itself, thus anonymizing the server. Contrary to the forward proxy, which hides the client’s identity, a reverse proxy hides the server’s identity.

### More Info

- https://en.wikipedia.org/wiki/Proxy_server

## Redundancy and Replication

Redundancy is the duplication of critical components or functions of a system with the intention of increasing the reliability of the system, usually in the form of a backup or fail-safe, or to improve actual system performance.

Replication means sharing information to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, fault-tolerance, or accessibility.

### More Info

- https://en.wikipedia.org/wiki/Redundancy_(engineering)
- https://en.wikipedia.org/wiki/Replication_(computing)

## SQL vs. NoSQL

### Relational (SQL)

Relational databases store data in tables, and each row contains all the information about one entity. Each row contains multiple columns, and each column contains some data.

SQL uses fixed Schemas that define column contents, and each row has the same number of columns.
Schemas can be updated, but the table must be as well.

ACID (Atomicity, Consistency, Isolation, Durability)

Examples: MySQL, Oracle, MS SQL Server, SQLite, Postgres, and MariaDB.

### Non-relational (NoSQL) Stores/DBs

Entities are stored in whatever way the db has chosen: key-value, document, graph, etc..
Schema-less: each entity can have different data points, hence new data points can be added dynamically.
Each type of db has its own query language.

BASE (Basically Available, Soft-state, Eventually consistent)

#### Key-Value

Data is stored in an array of key-value pairs. The ‘key’ is an attribute name which is linked to a ‘value’.

Examples: Redis, Voldemort, and Dynamo.

#### Document

Data is stored in documents (instead of rows and columns in a table) and these documents are grouped together in collections. Each document can have an entirely different structure.

Examples: CouchDB and MongoDB.

#### Wide-Column

Instead of tables, in columnar databases we have column families, which are containers for rows. Unlike relational databases, we don’t need to know all the columns up front and each row doesn’t have to have the same number of columns. Columnar databases are best suited for analyzing large datasets.

Examples: Cassandra and HBase.

#### Graph

These databases are used to store data whose relations are best represented in a graph. Data is saved in graph structures with nodes (entities), properties (information about the entities), and lines (connections between the entities).

Examples: Riak, Neo4J and InfiniteGraph.

### Comparison

Storage: SQL stores data in tables where each row represents an entity and each column represents a data point about that entity; for example, if we are storing a car entity in a table, different columns could be ‘Color’, ‘Make’, ‘Model’, and so on.

NoSQL databases have different data storage models. The main ones are key-value, document, graph, and columnar. We will discuss differences between these databases below.

Schema: In SQL, each record conforms to a fixed schema, meaning the columns must be decided and chosen before data entry and each row must have data for each column. The schema can be altered later, but it involves modifying the whole database and going offline.

In NoSQL, schemas are dynamic. Columns can be added on the fly and each ‘row’ (or equivalent) doesn’t have to contain data for each ‘column.’

Querying: SQL databases use SQL (structured query language) for defining and manipulating the data, which is very powerful. In a NoSQL database, queries are focused on a collection of documents. Sometimes it is also called UnQL (Unstructured Query Language). Different databases have different syntax for using UnQL.

Scalability: In most common situations, SQL databases are vertically scalable, i.e., by increasing the horsepower (higher Memory, CPU, etc.) of the hardware, which can get very expensive. It is possible to scale a relational database across multiple servers, but this is a challenging and time-consuming process.

On the other hand, NoSQL databases are horizontally scalable, meaning we can add more servers easily in our NoSQL database infrastructure to handle a lot of traffic. Any cheap commodity hardware or cloud instances can host NoSQL databases, thus making it a lot more cost-effective than vertical scaling. A lot of NoSQL technologies also distribute data across servers automatically.

Reliability or ACID Compliancy (Atomicity, Consistency, Isolation, Durability): The vast majority of relational databases are ACID compliant. So, when it comes to data reliability and safe guarantee of performing transactions, SQL databases are still the better bet.

Most of the NoSQL solutions sacrifice ACID compliance for performance and scalability.

#### SQL Use Cases

Ensure ACID
Highly Structured data

#### NoSQL Use Cases

Storing large volumes of unstructured data.
Often horizontally scale-able by default.
Rapid development due to mild constraints.

## CAP Theorm

Consistency, Availability, Partition Tolerance - pick two for any given distributed system.

- Consistency: All nodes see the same data.
- Availability: Every request receives a response.
- Partition Tolerance: Despite communication lose between nodes, the system functions.

Really though, it can be stated as

> In the presence of a network partition, a distributed system must choose either Consistency or Availability.

## PACELC Theorm

The PACELC theorem states that in a system that replicates data:

if there is a partition (‘P’), a distributed system can tradeoff between availability and consistency (i.e., ‘A’ and ‘C’);
else (‘E’), when the system is running normally in the absence of partitions, the system can tradeoff between latency (‘L’) and consistency (‘C’).

The whole thesis is assuming we maintain high availability by replication.

## Consistent Hashing

Data partitioning: It is the process of distributing data across a set of servers. It improves the scalability and performance of the system.

Data replication: It is the process of making multiple copies of data and storing them on different servers. It improves the availability and durability of the data across the system.

Consistent Hashing maps data to physical nodes and ensures that only a small set of keys move when servers are added or removed.

Consistent Hashing stores the data managed by a distributed system in a ring. Each node in the ring is assigned a range of data. The start of the range is called a token and each node will be assigned one token.

The range assigned to each node is computed as follows:

Range start: Token value
Range end: Next token value - 1

Consistent Hashing scheme described above works great when a node is added or removed from the ring, as in these cases, since only the next node is affected. For example, when a node is removed, the next node becomes responsible for all of the keys stored on the outgoing node. However, this scheme can result in non-uniform data and load distribution. This problem can be solved with the help of Virtual nodes.

Here are a few potential issues associated with a manual and fixed division of the ranges:

Adding or removing nodes: Adding or removing nodes will result in recomputing the tokens causing a significant administrative overhead for a large cluster.
Hotspots: Since each node is assigned one large range, if the data is not evenly distributed, some nodes can become hotspots.
Node rebuilding: Since each node’s data might be replicated (for fault-tolerance) on a fixed number of other nodes, when we need to rebuild a node, only its replica nodes can provide the data. This puts a lot of pressure on the replica nodes and can lead to service degradation.

Instead of assigning a single token to a node, the hash range is divided into multiple smaller ranges, and each physical node is assigned several of these smaller ranges. Each of these subranges is considered a Vnode.

Practically, Vnodes are randomly distributed across the cluster and are generally non-contiguous so that no two neighboring Vnodes are assigned to the same physical node or rack.

### Advantages

- As Vnodes help spread the load more evenly across the physical nodes on the cluster by dividing the hash ranges into smaller subranges, this speeds up the rebalancing process after adding or removing nodes. When a new node is added, it receives many Vnodes from the existing nodes to maintain a balanced cluster. Similarly, when a node needs to be rebuilt, instead of getting data from a fixed number of replicas, many nodes participate in the rebuild process.
- Vnodes make it easier to maintain a cluster containing heterogeneous machines. This means, with Vnodes, we can assign a high number of sub-ranges to a powerful server and a lower number of sub-ranges to a less powerful server.
- In contrast to one big range, since Vnodes help assign smaller ranges to each physical node, this decreases the probability of hotspots.

## Network Connection Types

Long-Polling, WebSockets, and Server-Sent Events are forms of connections between a client and a server.

### Long Polling

AKA "Hanging GET"

- If the server does not have any data available for the client, instead of sending an empty response, the server holds the request and waits until some data becomes available.
- Once the data becomes available, a full response is sent to the client. The client then immediately re-request information from the server so that the server will almost always have an available waiting request that it can use to deliver data in response to an event.

### WebSockets

Full Duplex (Two-Way), communication.

- https://en.wikipedia.org/wiki/Duplex_(telecommunications)#Full_duplex

### Server Sent Events (SSE)

Under SSEs the client establishes a persistent and long-term connection with the server. The server uses this connection to send data to a client.

- Client requests data from a server using regular HTTP.
- The requested webpage opens a connection to the server.
- The server sends the data to the client whenever there’s new information available.

## Bloom Filters

Problem:
Given a large set of structured data (identified by record IDs) stored in a set of data files, what is the most efficient way to know which file might contain our required data? We could build a sorted index and do a binary search on the index.

Solution:
Use Bloom filters to quickly find if an element might be present in a set. The Bloom filter data structure tells whether an element may be in a set, or definitely is not.
Adding more elements increases error rate.
A Bloom filter is a bit array of m bits, with k different hash functions that produce a bit array of size m.

For a fixed error rate, adding a new element and testing for membership are both constant time operations, and a filter with room for ‘n’ elements requires O(n) space.

## Quorums

Problem:
In Distributed Systems, data is replicated across multiple servers for fault tolerance and high availability. Once a system decides to maintain multiple copies of data, another problem arises: how to make sure that all replicas are consistent, i.e., if they all have the latest copy of the data and that all clients see the same view of the data?

Solution:
In a distributed environment, a quorum is the minimum number of servers on which a distributed operation needs to be performed successfully before declaring the operation’s overall success.

Suppose a database is replicated on five machines. In that case, quorum refers to the minimum number of machines that perform the same action (commit or abort) for a given transaction in order to decide the final operation for that transaction. So, in a set of 5 machines, three machines form the majority quorum, and if they agree, we will commit that operation. Quorum enforces the consistency requirement needed for distributed operations.

Quorum is (n/2) + 1 nodes in the system.

Quorum is achieved when nodes follow the below protocol: R + W > N, where:
N = nodes in the quorum group
W = minimum write nodes
R = minimum read nodes

If a distributed system follows R + W > N rule, then every read will see at least one copy of the latest value written.

## Leader and Follower

Problem:
Distributed systems keep multiple copies of data for fault tolerance and higher availability. A system can use quorum to ensure data consistency between replicas, i.e., all reads and writes are not considered successful until a majority of nodes participate in the operation. However, using quorum can lead to another problem, that is, lower availability; at any time, the system needs to ensure that at least a majority of replicas are up and available, otherwise the operation will fail. Quorum is also not sufficient, as in certain failure scenarios, the client can still see inconsistent data.

Solution:
Allow only a single server (called leader) to be responsible for data replication and to coordinate work.

At any time, one server is elected as the leader. This leader becomes responsible for data replication and can act as the central point for all coordination. The followers only accept writes from the leader and serve as a backup. In case the leader fails, one of the followers can become the leader. In some cases, the follower can serve read requests for load balancing.

## Heartbeats

In a decentralized system, whenever a request arrives at a server, the server should have enough information to decide which server is responsible for entertaining that request. This makes the timely detection of server failure an important task, which also enables the system to take corrective actions and move the data/work to another healthy server and stop the environment from further deterioration.

Solution:
Each server periodically sends a heartbeat message to a central monitoring server or other servers in the system to show that it is still alive and functioning.

## Checksums

In a distributed system, while moving data between components, it is possible that the data fetched from a node may arrive corrupted.

Solution:
Calculate a checksum and store it with data.

## System Design Links

- https://lethain.com/introduction-to-architecting-systems-for-scale/
- https://github.com/donnemartin/system-design-primer