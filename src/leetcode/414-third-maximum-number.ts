// https://leetcode.com/problems/third-maximum-number/
// 414. Third Maximum Number
// Return the third distinct maximum number. If it does not exist, return the maximum number.

const solution1 = (nums: number[]): number => {
  const distinctNums = Array.from(new Set(nums))
    .sort((a, b) => b - a);
  return distinctNums.length < 3
    ? Math.max(...distinctNums)
    : distinctNums[2]
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest
  describe('414. Third Maximum Number', () => {
    it('should return 1', () => {
      expect(solution1([1, 2, 3])).toBe(1);
    })
    it('should return 42', () => {
      expect(solution1([1, 42])).toBe(42);
    })
    it('should return 1', () => {
      expect(solution1([1, 1, 2, 2, 3, 3])).toBe(1);
    })
  })
}
