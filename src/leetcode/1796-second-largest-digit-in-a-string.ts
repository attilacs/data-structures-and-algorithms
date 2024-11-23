// https://leetcode.com/problems/second-largest-digit-in-a-string/
// 1796. Second Largest Digit in a String

const solution1 = (s: string): number => {
  const digits = new Set<number>();
  for (const char of s) {
    const digit = +char;
    if (!isNaN(digit)) {
      digits.add(digit);
    }
  }
  if (digits.size < 2) {
    return -1;
  }
  return Array.from(digits)
    .sort((a, b) => b - a)[1];
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest
  describe('1796. Second Largest Digit in a String', () => {
    it('should return 4', () => {
      expect(solution1('abc12345xyz')).toBe(4);
    })
    it('should return -1', () => {
      expect(solution1('xyz777')).toBe(-1);
    })
  })
}
