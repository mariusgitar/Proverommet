export type FeatureStatus = 'done' | 'partial' | 'planned';

export interface Feature {
  text: string;
  status: FeatureStatus;
}

export interface Module {
  name: string;
  emoji: string;
  color: string;
  status: 'done' | 'partial' | 'planned';
  features: Feature[];
}

export type Effort = 'low' | 'mid' | 'high';

export interface Direction {
  emoji: string;
  title: string;
  description: string;
  effort: Effort;
  items: string[];
}

export interface Principle {
  emoji: string;
  title: string;
  description: string;
}

export interface Roadmap {
  slug: string;
  updatedAt: string;
  version: string;
  modules: Module[];
  directions: Direction[];
  principles: Principle[];
}
