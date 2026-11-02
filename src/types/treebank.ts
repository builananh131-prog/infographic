export interface ActionItem {
  icon: string;
  text: string;
}

export interface YearStageData {
  year: number;
  stageBadge: string;
  yearTag: string;
  title: string;
  description: string;
  actions: ActionItem[];
  metric1Label: string;
  metric1: string;
  metric2Label: string;
  metric2: string;
  partners: string;
  icon: string;
  visualTitle: string;
  forestStatus: string;
  // Visual transformations for SVG
  trunkScaleY: number;
  trunkScaleX: number;
  canopyScale: number;
  leftTreeScale: number;
  rightTreeScale: number;
  denseForestOpacity: number;
  shootsOpacity: number;
  ecoOpacity: number;
  fscScale: number;
  rootsScale: number;
  rootsOpacity: number;
  heightMeters: string;
  diameterCm: string;
  carbonTons: string;
}

export interface VillageData {
  id: string;
  name: string;
  households: number;
  treesPlanted: number;
  areaHa: number;
  survivalRate: number;
  species: string;
  status: 'active' | 'certified' | 'expanding';
  leadContact: string;
  description: string;
}

export interface FscPrinciple {
  number: number;
  title: string;
  description: string;
  localAction: string;
  icon: string;
}

export interface StakeholderPillar {
  id: string;
  name: string;
  role: string;
  entities: string[];
  responsibilities: string[];
  badgeColor: string;
  icon: string;
}
