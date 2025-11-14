class Solution:
    def isPalindrome(self, x: int) -> bool:
        n = str(x)
        rev = ""
        for i in range(len(n) - 1, -1, -1):
            rev += n[i]
        return rev == n