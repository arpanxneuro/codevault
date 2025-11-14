class Solution:
    def romanToInt(self, s: str) -> int:
        romanMap = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        total = 0
        i = 0
        while i < len(s):
            curr = romanMap[s[i]]
            if i + 1 < len(s) and romanMap[s[i + 1]] > curr:
                nxt = romanMap[s[i + 1]]
                total += nxt - curr
                i += 2  # Skip the next character
            else:
                total += curr
                i += 1

        return total