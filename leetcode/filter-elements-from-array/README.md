# Custom Array Filter Implementation

This module provides a manual implementation of array filtering logic without using the built-in `Array.prototype.filter`. It applies a provided predicate function `fn` to each element and returns a new array containing only the values for which the predicate evaluates to a truthy value.

---

## 🚀 Problem Overview

Given:

- An integer array `arr`
- A filtering function `fn(element, index)`

Produce:

filteredArr = all arr[i] where Boolean(fn(arr[i], i)) === true


The filtering function may use one or both arguments:

- `arr[i]` — the element value  
- `i` — the element index  

Falsy results (e.g., `0`, `null`, `false`, `undefined`, `""`, `NaN`) must be excluded from the output.

---

## 📌 Examples

### Example 1
**Input:**  
`arr = [0,10,20,30]`  
`fn = n => n > 10`

**Output:**  
`[20,30]`

---

### Example 2
**Input:**  
`arr = [1,2,3]`  
`fn = (n, i) => i === 0`

**Output:**  
`[1]`

Index-based filtering is supported.

---

### Example 3
**Input:**  
`arr = [-2,-1,0,1,2]`  
`fn = n => n + 1`

**Output:**  
`[-2,0,1,2]`

Values producing falsy results (e.g., `0`) must be excluded.

---

## 📈 Constraints

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`

---

## 🧠 Implementation Strategy

- Initialize an empty output array.
- Iterate through `arr` from left to right.
- For each index `i`, evaluate `fn(arr[i], i)`.
- If the result is truthy, push `arr[i]` into the output array.
- Avoid using the built-in `.filter()` method to meet requirements.
- Maintain **O(n)** time complexity and **O(n)** worst-case space.