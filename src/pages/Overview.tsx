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
import { plantingChartData, growthChartOptions } from '../data/mockData';
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

// Page transitions configuration

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
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
          <p className="text-secondary" style={{ fontSize: 'var(--fs-sm)' }}>Overview of environmental impact.</p>
        </div>
        <div className="header-stats desktop-only" style={{ display: 'flex', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(0, 210, 106, 0.2)' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00d26a', boxShadow: '0 0 10px #00d26a' }}></div>
            <span style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-semibold)' }}>83% of 2026 Goal Reached</span>
          </div>
        </div>
      </div>

      <ImpactTiles />

      <div className="dashboard-grid">
        <div className="chart-section card" style={{ position: 'relative', overflow: 'visible' }}>
          <div className="section-header">
            <h3>Trees Planted & Carbon Progress</h3>
          </div>
          <div className="chart-wrapper">
            <Chart 
              type="line" 
              data={plantingChartData} 
              options={growthChartOptions as any} 
            />
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
