# Incremental Counter Function

This module delivers a closure-based counter function. The returned counter retains internal state and yields sequential integer outputs starting from an initial value `n`. Each invocation increments the count by one, enabling predictable and stateful numerical progression.

---

## 🚀 Problem Overview

Given an integer `n`, create and return a _counter function_.  
This counter must:

- Return `n` on the first call.
- Return the previous value + 1 on every subsequent call.
- Maintain state through closure (no global variables).

Effectively, the output sequence is:
n, n + 1, n + 2, n + 3, ...

---

## 📌 Examples

### Example 1

**Input:**  
`n = 10`  
`["call","call","call"]`

**Output:**  
`[10, 11, 12]`

**Explanation:**

- `counter()` → 10
- `counter()` → 11
- `counter()` → 12

---

### Example 2

**Input:**  
`n = -2`  
`["call","call","call","call","call"]`

**Output:**  
`[-2, -1, 0, 1, 2]`

---

## 📈 Constraints

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- Each entry in `calls` is `"call"`

---

## 🧠 Implementation Strategy

- Use a closure to encapsulate the current value.
- Increment internal state after each call.
- Return the current state on each invocation.

This approach ensures **O(1)** runtime per call with minimal overhead.
