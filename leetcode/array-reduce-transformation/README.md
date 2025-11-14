
If `nums` is empty, the output must be `init`.

---

## 📌 Examples

### Example 1
**Input:**  
`nums = [1,2,3,4]`  
`fn = (accum, curr) => accum + curr`  
`init = 0`  

**Output:**  
`10`

**Explanation:**
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10


---

### Example 2
**Input:**  
`nums = [1,2,3,4]`  
`fn = (accum, curr) => accum + curr * curr`  
`init = 100`  

**Output:**  
`130`

---

### Example 3
**Input:**  
`nums = []`  
`fn = () => 0`  
`init = 25`  

**Output:**  
`25`

**Explanation:**  
Empty arrays always return `init`.

---

## 📈 Constraints

- `0 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`
- `0 <= init <= 1000`

---

## 🧠 Implementation Strategy

- Initialize a variable `val` with `init`.
- Iterate through the array from left to right.
- For each element `nums[i]`, compute `val = fn(val, nums[i])`.
- Return `val` after the loop completes.
- If the array is empty, return `init` immediately.
- Avoid using `Array.prototype.reduce` as part of the requirement.

This approach delivers deterministic sequential processing with **O(n)** time complexity and **O(1)** space overhead.
