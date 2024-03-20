# Math for Programming

## Series

### Common Series

Sum of `1, 2, 3, ..., n - 1, n`

```
= 1 + 2 + 3 + ... + (n - 1) + n
= n + (n - 1) + ... + 3 + 2 + 1
= [n * (n + 1)] / 2
~= O(n ^ 2 / 2)
~= O(n ^ 2)

```

### Triangluar series

`1, 2, 3, 4, ..., n - 1, n`

- every pair of `(1, x), (2, x - 1)` adds up to the same value, `n + 1`.
  e.g. `1 + n = 2 + n - 1 = .. = n + 1`
- The sum of the series is `S = (n ^ 2 + n) / 2`

## Function definitions

- Log function:

  `log2(Q) = P` is defined as a function that reverses the exponetiation of `2^P = Q`

## Permutations and Combinations

### Permutations

- Order matters for permutations, e.g. lock combinations. [wow, that's confusing - sam]
- e.g. `P` permutations of `n` numbers, taken `r` at a time:

  `P(n, r) = nPr`

  `= n * (n - 1) * (n - 2) ... (n - r + 1)`

  `= n! / (n - r)!`

### Combinations

- Order does not matter for Combinations, e.g. a handful of coins.
- `C` combinations of `n` things taken `r` at a time, e.g. :

  `C(n, r) = nCr`

  `= (n * (n - 1) ... (n - r + 1)) / (r * (r - 1)) ... 1`

  `= n! / (r! * (n - r)!)`

### Guides

- [Permutations](https://www.tutorsonnet.com/different-formulas-on-permutation-homework-help.php)
- [Perms and Combs](https://medium.com/i-math/combinations-permutations-fa7ac680f0ac)
