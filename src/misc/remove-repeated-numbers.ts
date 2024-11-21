// Write a function to remove repeated numbers from an array

const solution1 = (nums: number[]): number[] => {
  return Array.from(new Set(nums));
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest
  describe('Remove repeated numbers from an array', () => {
    it('should return an empty array', () => {
      expect(solution1([])).toEqual([]);
    })
    it('should return the same array', () => {
      expect(solution1([1, 2, 3])).toEqual([1, 2, 3]);
    })
    it('should return an array without the repeated elements', () => {
      expect(solution1([1, 2, 3, 4, 5, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    })
  })
}
