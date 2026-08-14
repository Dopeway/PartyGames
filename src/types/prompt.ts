export type PromptCategory = 'RELATIONS' | 'HABITUDES' | 'OPINIONS' | 'ABSURDE' | 'SOCIÉTÉ';

export interface PromptTag {
  id: string;
  label: string;
}

export interface Prompt {
  id: string;
  gameId: string;
  text: string;
  category: PromptCategory;
  tags: string[];
  difficulty?: 'SOFT' | 'MEDIUM' | 'HARD'; // Pour calibrer l'intensité du débat
}
