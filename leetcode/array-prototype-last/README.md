# Array Prototype Enhancement – `last()` Method

This utility extends the native JavaScript `Array` prototype to support a `last()` method that returns the final element of any array instance. If the array is empty, the method returns `-1`.  
You may assume the array originates from `JSON.parse`, ensuring standard structure and behavior.

---

## 🚀 Problem Overview

Enhance all arrays such that:

- `array.last()` returns the last element of the array.
- If the array is empty, `array.last()` returns `-1`.
- Works seamlessly for any parsed JSON array.

---

## 📌 Examples

### Example 1  
**Input:**  
`nums = [null, {}, 3]`  
**Output:**  
`3`  
**Explanation:**  
`nums.last()` returns the last element.

### Example 2  
**Input:**  
`nums = []`  
**Output:**  
`-1`  
**Explanation:**  
Empty arrays yield `-1`.

---

## 📈 Constraints

- `arr` is always a valid JSON array  
- `0 <= arr.length <= 1000`

---

## 🧠 Implementation Strategy

- Extend `Array.prototype` responsibly.
- Leverage `this.length` to determine whether an array contains elements.
- Return the final element if available; otherwise return fallback `-1`.
