# Special Array Validation

This module defines a deterministic validation mechanism to determine whether an integer array demonstrates alternating parity across all adjacent elements. The objective is to confirm strict odd–even alternation throughout the entire sequence.

---

## 📌 Problem Statement

An array is considered **special** if **every pair of adjacent elements has opposite parity**:

- One number must be **even**.
- The other must be **odd**.

Given an integer array `nums`, return:

- `true` — if the array satisfies alternating parity conditions
- `false` — otherwise

---

## 📊 Examples

### Example 1

**Input:**  
`nums = [1]`  
**Output:**  
`true`

**Explanation:**  
A single-element array is always valid since there are no adjacent pairs to violate parity rules.

---

### Example 2

**Input:**  
`nums = [2, 1, 4]`  
**Output:**  
`true`

**Explanation:**  
Adjacent pairs:

- (2, 1) → even–odd ✔
- (1, 4) → odd–even ✔

All pairs alternate correctly.

---

### Example 3

**Input:**  
`nums = [4, 3, 1, 6]`  
**Output:**  
`false`

**Explanation:**  
Adjacent elements at positions 1 and 2 → (3, 1) are both odd ✘  
This breaks the alternating-parity requirement.

---

## 🔒 Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- All values are positive integers

---

## 🧠 Conceptual Approach

- Iterate through the array from index 1 onward.
- For each adjacent pair `(nums[i-1], nums[i])`, evaluate parity using modulo-based classification.
- If any pair shares the same parity (both odd or both even), classification fails immediately.
- If no violations occur across the full scan, the array is considered special.

---

## 🚀 Output Behavior

The function delivers a boolean response confirming whether the input array adheres to strict alternating-parity integrity across all adjacent indices.

---

## 📄 License

MIT License.
