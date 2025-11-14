function twoSum(nums: number[], target: number): number[] {
    const numIndices = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.has(complement)) { return [numIndices.get(complement)!, i] };
        numIndices.set(nums[i], i);
    }
    // throw new Error("No solution exists");
};