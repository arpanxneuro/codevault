# Longest Common Prefix

This module provides a high-efficiency utility for deriving the **longest common prefix (LCP)** across an array of lowercase string values.  
If no shared prefix exists, the function returns an empty string.

---

## 📌 Problem Statement

Given an array of strings, identify the longest shared prefix among all elements.

If no common prefix exists, return `""`.

---

## 📊 Examples

### Example 1
**Input:**  
`["flower", "flow", "flight"]`  
**Output:**  
`"fl"`

### Example 2  
**Input:**  
`["dog", "racecar", "car"]`  
**Output:**  
`""`  
**Explanation:**  
No shared prefix exists across the provided inputs.

---

## 🔒 Constraints

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- All non-empty strings contain only lowercase English letters

---

## 🧠 Algorithmic Blueprint

The recommended strategy uses **horizontal scanning**:

1. Initialize the prefix using the first string.
2. Iteratively compare this prefix with each subsequent string.
3. Shorten the prefix until it aligns with the start of the current string.
4. If the prefix becomes empty at any point, terminate early.

This ensures predictable **O(S)** performance, where S = total number of characters across all strings.
