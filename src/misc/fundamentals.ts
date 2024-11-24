const sum = (nums: number[]): number => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

const sum2 = (nums: number[]): number => {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

const count = (nums: number[], target: number): number => {
  let countResult = 0;
  for (const num of nums) {
    if (num === target) {
      countResult++;
    }
  }
  return countResult;
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest
  describe('Sum', () => {
    describe('For loop solution', () => {
      it('should return 0', () => {
        expect(sum([])).toBe(0);
      })
      it('should return 15', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
      })
    })
    describe('Reduce solution', () => {
      it('should return 0', () => {
        expect(sum2([])).toBe(0);
      })
      it('should return 15', () => {
        expect(sum2([1, 2, 3, 4, 5])).toBe(15);
      })
    })
  })
  describe('Count', () => {
    it('should return 0 in case of empty array', () => {
      expect(count([], 0)).toBe(0);
    })
    it('should return 0', () => {
      expect(count([1, 2, 3, 4, 5], 6)).toBe(0);
    })
    it('should return 2', () => {
      expect(count([1, 2, 3, 4, 1], 1)).toBe(2);
    })
  })
}
