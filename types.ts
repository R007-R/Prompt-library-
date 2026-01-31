
export type ToolType = 'ChatGPT' | 'Gemini' | 'Claude' | 'Midjourney' | 'DALL-E';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  body: string;
  category: string;
  tags: string[];
  tools: ToolType[];
  isPremium: boolean;
  difficulty: SkillLevel;
  instructions: string;
  exampleOutput: string;
  createdAt: string;
  slug: string;
}

export interface FilterState {
  search: string;
  category: string;
  isPremium: boolean | null;
  tool: ToolType | 'All';
  difficulty: SkillLevel | 'All';
}
