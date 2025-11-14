# Async Sleep Utility

This module provides a lightweight asynchronous sleep function that suspends execution for a specified duration in milliseconds. The function returns a Promise that resolves after the given delay, enabling controlled timing behavior within modern JavaScript workflows.

---

## 🚀 Problem Overview

Given a positive integer `millis`, implement an asynchronous function that:

- Returns a Promise.
- Resolves _after_ at least `millis` milliseconds.
- May resolve with any value.
- Accepts minor real-world timing deviations due to event-loop behavior.

This is a foundational utility for throttling, debouncing, scheduling, and async control-flow operations.

---

## 📌 Examples

### Example 1

**Input:**  
`millis = 100`

**Output:**  
`100`

## 📈 Constraints

- `1 <= millis <= 1000`

---

## 🧠 Implementation Strategy

- Wrap `setTimeout` inside a Promise constructor.
- Ensure the Promise resolves only after the specified timer completes.
- Maintain compatibility with both `async/await` and traditional Promise chaining.
- Leverage JavaScript's event-loop mechanics to deliver deterministic, non-blocking delays with **O(1)** overhead.
