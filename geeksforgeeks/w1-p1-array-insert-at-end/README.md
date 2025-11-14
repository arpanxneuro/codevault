# 🧩 Insert at End of Array

**Platform:** [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/array-insert-at-end/1)  
**Category:** Arrays  
**Difficulty:** Basic  
**Problem Statement:** Given a partially-filled array `arr[]` and an integer value `val`, insert the value at the end of the array.

## 📘 Problem Overview
Insert a given value at the end of a partially filled array and return the updated array.

## 📥 Input Format
- `arr[]`: An array of integers (not completely filled)
- `n`: Current number of elements in the array
- `capacity`: Maximum capacity of the array
- `val`: Integer value to be inserted at the end

## 📤 Output Format
- Return the updated array with `val` inserted at the end
- The function should return the new size of the array after insertion

## 🔍 Constraints
- 1 ≤ n ≤ 10^5
- 0 ≤ arr[i] ≤ 10^6
- 1 ≤ capacity ≤ 10^6
- 0 ≤ val ≤ 10^6
- It is guaranteed that the array has at least one empty slot

## 🧪 Sample Cases

### Example 1:
**Input:**  
```
arr = [1, 2, 3, 4, 5]
n = 5
capacity = 10
val = 90
```
**Output:**  
```
6  # New size of array
[1, 2, 3, 4, 5, 90]  # Array after insertion
```
**Explanation:**  
The value 90 is inserted at the end of the array, increasing its size by 1.

### Example 2:
**Input:**  
```
arr = [10, 20, 30]
n = 3
capacity = 5
val = 40
```
**Output:**  
```
4
[10, 20, 30, 40]
```

## 🧠 Approach
To solve this problem, we need to insert a given value at the end of a partially filled array. The key insight is that we already know the current number of elements in the array (`n`), so we can directly place the new value at index `n` and then increment the size.

### Key Insights:
1. The array has enough capacity to accommodate the new element (as per problem constraints)
2. The current number of elements is given by `n`
3. The new element should be placed at index `n` (0-based indexing)
4. The size of the array after insertion will be `n + 1`

### Algorithm Steps:
1. Check if there's space in the array (n < capacity)
2. Insert `val` at index `n`
3. Increment the size `n` by 1
4. Return the new size

## 📊 Complexity Analysis

- **Time Complexity:** O(1)  
  We're performing a constant number of operations regardless of the array size.

- **Space Complexity:** O(1)  
  No additional space is used apart from the input array.

## 🚀 Solution Code
```python
def insertAtEnd(arr, sizeOfArray, element):
    arr[sizeOfArray-1] = element
    return sizeOfArray
```

## 📝 Notes
- The problem assumes there's always space in the array (n < capacity)
- The function updates the array in-place
- The array size is increased by 1 after insertion
- Edge cases like empty array or full array are handled by the problem constraints

**Time Complexity:** O(n)

**Space Complexity:** O(1)
