# String Group Partitioning

This module outlines a deterministic grouping mechanism that partitions an input string into fixed-size segments, ensuring consistent structural formatting. The solution accommodates incomplete trailing segments through an explicit fill-character strategy.

---

## 📌 Problem Statement

Given:

- A lowercase string `s`
- A group size `k`
- A fill character `fill`

The string must be partitioned sequentially into groups of size `k`:

1. The first group contains the first `k` characters.
2. The second group contains the next `k` characters.
3. The process continues until the string is exhausted.
4. If the final group contains fewer than `k` characters, the remaining positions must be padded using the `fill` character.
5. When all groups are concatenated after removing fill characters from the last group, the result must reconstruct the original string `s`.

The output is an array of all groups in the order they were generated.

---

## 📊 Examples

### Example 1

**Input:**  
`s = "abcdefghi"`, `k = 3`, `fill = "x"`

**Output:**  
`["abc", "def", "ghi"]`

**Explanation:**  
All groups are fully populated; no fill characters are required.

---

### Example 2

**Input:**  
`s = "abcdefghij"`, `k = 3`, `fill = "x"`

**Output:**  
`["abc", "def", "ghi", "jxx"]`

**Explanation:**  
The final segment has only `'j'`, so two `'x'` characters are appended to meet the group size.

---

## 🔒 Constraints

- `1 <= s.length <= 100`
- `s` contains lowercase English letters only
- `1 <= k <= 100`
- `fill` is a lowercase English letter

---

## 🧠 Conceptual Approach

- Iterate across the string in increments of `k`.
- Extract fixed-length segments.
- If the last extracted segment is shorter than `k`, extend it using the designated `fill` character.
- Compile all segments into a result array while preserving ordering guarantees.

---

## 🚀 Output

The grouping operation yields a deterministic array representing the partitioned structure of the original string, compliant with formatting requirements and padding behavior.

---

## 📄 License

MIT License.
