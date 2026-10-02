export type SectorId = 'pharma' | 'operations' | 'takaful' | 'insurance';

export interface Metric {
  value: string;
  label: string;
}

export interface Role {
  id: string;
  role: string;
  company: string;
  partnership?: string;
  location: string;
  period: string;
  start: [number, number];
  end: [number, number] | null;
  sector: SectorId;
  bullets: string[];
  metrics: Metric[];
  partners?: string[];
}

export interface Highlight {
  value: string;
  label: string;
  context: string;
  fill?: number;
}

export interface PolicySection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}