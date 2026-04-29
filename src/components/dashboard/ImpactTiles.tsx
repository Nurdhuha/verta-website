import React from 'react';
import { TreePine, Activity, Cloud } from 'lucide-react';
import { impactTilesData } from '../../data/mockData';
import './ImpactTiles.css';

const iconMap = {
  TreePine: <TreePine size={24} color="var(--emerald-green)" />,
  Activity: <Activity size={24} color="var(--emerald-green)" />,
  Cloud: <Cloud size={24} color="var(--emerald-green)" />,
};

const ImpactTiles = () => {
  return (
    <div className="impact-tiles-container">
      {impactTilesData.map((tile, index) => (
        <div key={index} className="impact-tile card">
          <div className="tile-header">
            <div className="tile-icon-wrapper">
              {iconMap[tile.iconName]}
            </div>
            <span className={`trend ${tile.trendPositive ? 'positive' : 'negative'}`}>
              {tile.trend}
            </span>
          </div>
          <div className="tile-body">
            <p className="tile-title">{tile.title}</p>
            <h2 className="tile-value">{tile.value}</h2>
            <p className="tile-subtitle">{tile.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactTiles;
