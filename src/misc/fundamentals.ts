// Programozasi tetelek
// Osszegzes
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

// Megszamlalas: az elemek szama
const count = (nums: number[], target: number): number => {
  let countResult = 0;
  for (const num of nums) {
    if (num === target) {
      countResult++;
    }
  }
  return countResult;
}

// Eldontes: a feltetelnek megelelo elem van-e a tombben
const decision = (nums: number[], target: number): boolean => {
  let i = 0;
  while (i < nums.length && nums[i] !== target) {
    i++
  }
  return i < nums.length;
}

// Kivalasztas: a feltetelnek megelelo elem indexet hatarozzuk meg (biztosan benne van)
const selection = (nums: number[], target: number): number => {
  let i = 0;
  while (nums[i] !== target) {
    i++;
  }
  return i;
}

// Kereses: kiirja a feltetelnek megfelelo elso elem indexet (nem biztos, hogy van ilyen)
const search = (nums: number[], target: number): number => {
  let i = 0;
  while (i < nums.length && nums[i] !== target) {
    i++;
  }
  if (i < nums.length) {
    return i;
  }
  return -1;
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
  describe('Eldontes', () => {
    it('should return false in case of empty array', () => {
      expect(decision([], 0)).toBe(false);
    })
    it('should return false', () => {
      expect(decision([1, 2, 3, 4, 5], 0)).toBe(false);
    })
    it('should return true', () => {
      expect(decision([1, 2, 3, 4, 5], 2)).toBe(true);
    })
  })
  describe('Kivalasztas', () => {
    it('should return 0', () => {
      expect(selection([1, 2, 3, 4, 5], 1)).toBe(0);
    })
  })
  describe('Kereses', () => {
    it('should return -1', () => {
      expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);
    })
    it('should return 0', () => {
      expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
    })
  })
}
