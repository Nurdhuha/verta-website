import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ImpactTiles from './ImpactTiles';
import AnalyticsPanel from './AnalyticsPanel';
import { growthChartData, growthChartOptions } from '../../data/mockData';
import './Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Executive Summary</h1>
          <p className="text-secondary">Overview of your VERTA environmental impact.</p>
        </div>
      </div>

      <ImpactTiles />

      <div className="dashboard-grid">
        <div className="chart-section card">
          <div className="section-header">
            <h3>Growth & Carbon Data</h3>
          </div>
          <div className="chart-wrapper">
            <Line data={growthChartData} options={growthChartOptions} />
          </div>
        </div>

        <div className="analytics-section">
          <AnalyticsPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
