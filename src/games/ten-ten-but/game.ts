import { Prompt, PromptCategory } from '@/types/prompt';

export interface Vote {
  playerId: string;
  value: number;
}

export interface GameResult {
  average: number;
  outlierIndex: number;
  distances: number[];
}

/**
 * Selects a random prompt. 
 * Optionally filters by category.
 */
export function selectNextPrompt(
  prompts: Prompt[], 
  usedPromptIds: string[], 
  category?: PromptCategory
): Prompt | null {
  let availablePrompts = prompts.filter(p => !usedPromptIds.includes(p.id));
  
  if (category) {
    availablePrompts = availablePrompts.filter(p => p.category === category);
  }
  
  if (availablePrompts.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * availablePrompts.length);
  return availablePrompts[randomIndex];
}

/**
 * Calculates the average of the votes.
 */
export function calculateAverage(votes: number[]): number {
  if (votes.length === 0) return 0;
  const sum = votes.reduce((acc, val) => acc + val, 0);
  return Math.round((sum / votes.length) * 10) / 10;
}

/**
 * Finds the index of the player whose vote is furthest from the average.
 * In case of a tie, the first one found is returned.
 */
export function findFurthestFromAverage(votes: number[], average: number): number {
  let maxDistance = -1;
  let outlierIndex = 0;

  votes.forEach((vote, index) => {
    const distance = Math.abs(vote - average);
    if (distance > maxDistance) {
      maxDistance = distance;
      outlierIndex = index;
    }
  });

  return outlierIndex;
}
