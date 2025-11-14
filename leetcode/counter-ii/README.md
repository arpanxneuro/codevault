# Create Counter

This module provides a closure-driven counter utility supporting controlled state mutation through increment, decrement, and reset operations.  
The function encapsulates its internal state to ensure predictable behavior across repeated invocations.

---

## 📌 Problem Statement

Implement a function `createCounter(init)` that:

- Accepts an integer `init` as the initial state.
- Returns an object with three operations:

| Method | Behavior |
|--------|-----------|
| `increment()` | Increases the current value by **1** and returns it |
| `decrement()` | Decreases the current value by **1** and returns it |
| `reset()` | Resets value back to `init` and returns it |

---

## 📊 Examples

### Example 1

**Input:**  
`init = 5`  
`calls = ["increment", "reset", "decrement"]`  

**Output:**  
`[6, 5, 4]`
