import { TreePine, Activity, Cloud } from 'lucide-react';
import { impactTilesData } from '../../data/mockData';
import './ImpactTiles.css';

const ImpactTiles = () => {
  return (
    <div className="impact-tiles-container">
      {impactTilesData.map((tile, index) => (
        <div key={index} className="impact-tile card">
          <div className="tile-header">
            <div className="tile-icon-wrapper">
              {tile.iconName === 'TreePine' && <TreePine size={20} color="#00d26a" />}
              {tile.iconName === 'Activity' && <Activity size={20} color="#00d26a" />}
              {tile.iconName === 'Cloud' && <Cloud size={20} color="#00d26a" />}
            </div>
            <span className={`trend ${tile.trendPositive ? 'positive' : 'negative'}`}>
              {tile.trend}
            </span>
          </div>
          <div className="tile-body">
            <p className="tile-title" style={{ color: '#64748b' }}>{tile.title}</p>
            <h2 className="tile-value" style={{ color: '#0f172a' }}>{tile.value}</h2>
            <p className="tile-subtitle" style={{ color: '#94a3b8' }}>{tile.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactTiles;
