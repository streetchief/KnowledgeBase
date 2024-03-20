# Databases

## Strategy: CAP

- Consistency: Every read receives the most recent write or an error
- Availability: Every request receives a response, without guarantee that it contains the most recent version of the information
- Partition tolerance: The system continues to operate despite arbitrary partitioning due to network failures

## SQL

ACID compliancy (Atomicity, Consistency, Isolation, Durability)

- Atomicity - Each transaction is all or nothing
- Consistency - Any transaction will bring the database from one valid state to another
- Isolation - Executing transactions concurrently has the same results as if the transactions were executed serially
- Durability - Once a transaction has been committed, it will remain so

## NoSQL

BASE is often used to describe the properties of NoSQL databases. In comparison with the CAP Theorem, BASE chooses availability over consistency.

- Basically available - the system guarantees availability.
- Soft state - the state of the system may change over time, even without input.
- Eventual consistency - the system will become consistent over a period of time, given that the system doesn't receive input during that period.
