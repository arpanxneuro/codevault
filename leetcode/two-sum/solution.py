class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numIndices = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in numIndices:
                return [numIndices[complement], i]
            numIndices[num] = i
