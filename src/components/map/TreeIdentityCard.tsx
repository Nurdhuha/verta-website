import React from 'react';
import { X, MapPin, Calendar, Camera } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { TreeIdentityCardProps } from '../../types';
import { growthChartData, growthChartOptions } from '../../data/mockData';
import './TreeIdentityCard.css';

const TreeIdentityCard: React.FC<TreeIdentityCardProps> = ({ treeId, onClose }) => {
  return (
    <div className="tree-identity-overlay" onClick={onClose}>
      <div className="tree-identity-panel" onClick={(e) => e.stopPropagation()}>
        <div className="panel-header">
          <div>
            <h2>{treeId}</h2>
            <span className="status-badge healthy">Healthy</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="panel-content">
          <div className="spec-card">
            <div className="spec-row">
              <span className="spec-label">Species</span>
              <span className="spec-value">Trembesi (Samanea saman)</span>
            </div>
            <div className="spec-row">
              <span className="spec-label"><Calendar size={14} /> Planted</span>
              <span className="spec-value">12 Aug 2023</span>
            </div>
            <div className="spec-row">
              <span className="spec-label"><MapPin size={14} /> Coordinates</span>
              <span className="spec-value">-6.2088, 106.8456</span>
            </div>
          </div>

          <div className="timeline-section">
            <div className="section-title">
              <Camera size={16} />
              <h4>Photo Timeline</h4>
            </div>
            <div className="photo-gallery">
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=150&q=80" alt="Seedling" />
                <span>Month 1</span>
              </div>
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1596328546171-77e37b5fefea?auto=format&fit=crop&w=150&q=80" alt="Growth" />
                <span>Month 6</span>
              </div>
              <div className="photo-item current">
                <img src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=150&q=80" alt="Current" />
                <span>Current</span>
              </div>
            </div>
          </div>

          <div className="chart-section">
            <div className="section-title">
              <h4>Growth Trajectory</h4>
            </div>
            <div className="chart-container">
              <Line data={growthChartData} options={growthChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeIdentityCard;
