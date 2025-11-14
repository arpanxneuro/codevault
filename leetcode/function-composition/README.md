# Function Composition Utility

This module provides a functional composition mechanism that constructs a new function by chaining an array of unary functions. The composed function executes from right to left, ensuring that the output of each function becomes the input of the previous one. When the input list is empty, the module returns an identity function.

---

## 🚀 Problem Overview

Given:

- An array of single-argument functions: `[f1, f2, f3, ..., fn]`
- A single integer input `x`

Return a new function `fn(x)` that computes:

f1(f2(f3(...fn(x)...)))


If the array is empty, the composition defaults to the identity function:

f(x) = x


---

## 📌 Examples

### Example 1
**Input:**  
`functions = [x => x + 1, x => x * x, x => 2 * x]`  
`x = 4`  

**Output:**  
`65`

**Evaluation Flow (right → left):**

2 * 4 = 8
8 * 8 = 64
64 + 1 = 65


---

### Example 2
**Input:**  
`functions = [x => 10 * x, x => 10 * x, x => 10 * x]`  
`x = 1`  

**Output:**  
`1000`

---

### Example 3
**Input:**  
`functions = []`  
`x = 42`  

**Output:**  
`42`  
Identity behavior for empty arrays.

---

## 📈 Constraints

- `-1000 <= x <= 1000`  
- `0 <= functions.length <= 1000`  
- Each function accepts and returns a single integer  

---

## 🧠 Implementation Strategy

- If no functions are provided, return an identity function.
- Otherwise, return a new function that:
  - Iterates through the function list in reverse order.
  - Applies each function to the accumulating value.
- This ensures **right-to-left composition**, consistent with mathematical convention.
- Maintain optimal **O(n)** runtime and **O(1)** space.