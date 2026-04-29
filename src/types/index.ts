import { ReactNode } from 'react';

// === Domain Types ===

export type TreeStatus = 'healthy' | 'attention' | 'dead';

export interface Tree {
  id: string;
  lat: number;
  lng: number;
  status: TreeStatus;
}

export interface TreeSpec {
  species: string;
  plantedDate: string;
  coordinates: string;
}

// === Component Props ===

export interface InteractiveMapProps {
  onTreeClick: (id: string) => void;
}

export interface TreeIdentityCardProps {
  treeId: string;
  onClose: () => void;
}

// === UI Data Types ===

export interface ImpactTileData {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  trend: string;
  trendPositive: boolean;
}

export interface ActivityLogEntry {
  time: string;
  user: string;
  action: string;
  detail: string;
}

export interface ZoneInsight {
  status: TreeStatus;
  title: string;
  description: string;
}
