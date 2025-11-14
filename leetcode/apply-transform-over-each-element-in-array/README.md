# Custom Array Map Implementation

This module provides a manual implementation of JavaScript’s array mapping behavior without relying on the built-in `Array.prototype.map`. The utility applies a transformation function `fn` to each element of the input array and returns a new array with the transformed values.

---

## 🚀 Problem Overview

Given:

- An integer array `arr`
- A mapping function `fn(value, index)`

Produce:

returnedArray[i] = fn(arr[i], i)


This ensures that each output element reflects the transformation logic defined by the mapping function.

---

## 📌 Examples

### Example 1
**Input:**  
`arr = [1,2,3]`  
`fn = n => n + 1`

**Output:**  
`[2,3,4]`

---

### Example 2
**Input:**  
`arr = [1,2,3]`  
`fn = (n, i) => n + i`

**Output:**  
`[1,3,5]`

Index-based mapping is supported.

---

### Example 3
**Input:**  
`arr = [10,20,30]`  
`fn = () => 42`

**Output:**  
`[42,42,42]`

Functions returning static values are valid.

---

## 📈 Constraints

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`
- `fn` returns an integer

---

## 🧠 Implementation Strategy

- Initialize a new array.
- Iterate through the input list once.
- For each position `i`, compute:

newArr[i] = fn(arr[i], i)

- Avoid using `.map()` to comply with constraints.
- Preserve **O(n)** time complexity and **O(n)** output space.
