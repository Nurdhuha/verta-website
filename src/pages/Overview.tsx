import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import ImpactTiles from '../components/dashboard/ImpactTiles';
import AnalyticsPanel from '../components/dashboard/AnalyticsPanel';
import { growthChartData, growthChartOptions } from '../data/mockData';
import '../components/dashboard/Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const Overview = () => {
  return (
    <motion.div
      className="dashboard-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
            <Chart type="line" data={growthChartData} options={growthChartOptions as any} />
          </div>
        </div>

        <div className="analytics-section">
          <AnalyticsPanel />
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
