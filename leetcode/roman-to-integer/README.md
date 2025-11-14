# Roman Numeral to Integer Converter

A streamlined algorithmic utility that transforms a valid Roman numeral into its corresponding integer value.  
This solution adheres to the canonical Roman numeral notation rules, including subtractive cases such as **IV, IX, XL, XC, CD, CM**.

---

## 🚀 Problem Overview

Roman numerals are constructed using seven core symbols:

| Symbol | Value |
|--------|--------|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are typically written from largest to smallest.  
However, specific subtractive combinations exist:

- **I** before **V** or **X** → 4, 9  
- **X** before **L** or **C** → 40, 90  
- **C** before **D** or **M** → 400, 900  

Your task is to convert a valid Roman numeral string into its integer representation.

---

## 📌 Examples

### Example 1
**Input:** `III`  
**Output:** `3`  
**Explanation:** III = 3  

### Example 2  
**Input:** `LVIII`  
**Output:** `58`  
**Explanation:** L = 50, V = 5, III = 3  

### Example 3  
**Input:** `MCMXCIV`  
**Output:** `1994`  
**Explanation:**  
- M = 1000  
- CM = 900  
- XC = 90  
- IV = 4  

---

## 📈 Constraints

- `1 <= s.length <= 15`
- Contains only: `I, V, X, L, C, D, M`
- Input is always a valid Roman numeral in the range **[1, 3999]**

---

## 🧠 Algorithmic Strategy

- Maintain a mapping of Roman symbols to integer values.
- Traverse the string from left to right.
- For each character, compare its value with the next character:
  - If the next value is greater → subtract current value.
  - Otherwise → add current value.
- Aggregate the result.

This approach ensures **O(n)** time efficiency with constant space.
