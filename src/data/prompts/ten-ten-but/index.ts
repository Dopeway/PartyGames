import { RELATIONS_PROMPTS } from './relations';
import { HABITS_PROMPTS } from './habits';
import { ABSURD_PROMPTS } from './absurd';
import { OPINIONS_PROMPTS } from './opinions';
import { SOCIETY_PROMPTS } from './society';
import { Prompt } from '@/types/prompt';

export const ALL_TEN_TEN_BUT_PROMPTS: Prompt[] = [
  ...RELATIONS_PROMPTS,
  ...HABITS_PROMPTS,
  ...ABSURD_PROMPTS,
  ...OPINIONS_PROMPTS,
  ...SOCIETY_PROMPTS,
];
