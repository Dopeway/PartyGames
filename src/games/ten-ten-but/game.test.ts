import { describe, it, expect } from 'vitest';
import { calculateAverage, findFurthestFromAverage } from './game';

describe('Ten Ten But Game Logic', () => {
  describe('calculateAverage', () => {
    it('should calculate the average of multiple votes', () => {
      expect(calculateAverage([3, 8, 7])).toBe(6);
    });

    it('should handle identical votes', () => {
      expect(calculateAverage([5, 5, 5])).toBe(5);
    });

    it('should handle empty votes', () => {
      expect(calculateAverage([])).toBe(0);
    });

    it('should round to one decimal place', () => {
      expect(calculateAverage([3, 4])).toBe(3.5);
    });
  });

  describe('findFurthestFromAverage', () => {
    it('should find the player furthest from the average', () => {
      const votes = [3, 8, 7];
      const average = 6;
      // Distances: 3 (3), 2 (8), 1 (7)
      expect(findFurthestFromAverage(votes, average)).toBe(0);
    });

    it('should handle ties by returning the first occurrence', () => {
      const votes = [2, 8, 5];
      const average = 5;
      // Distances: 3 (2), 3 (8), 0 (5)
      expect(findFurthestFromAverage(votes, average)).toBe(0);
    });

    it('should work with 2 players', () => {
      const votes = [1, 10];
      const average = 5.5;
      // Both are equally distant (4.5)
      expect(findFurthestFromAverage(votes, average)).toBe(0);
    });
  });
});
