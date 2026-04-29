import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { 
  healthData, 
  regionData, 
  zoneGrowthData, 
  doughnutChartOptions,
  barChartOptions, 
  growthChartOptions 
} from '../data/mockData';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, Title);

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const Analytics = () => {
  return (
    <motion.div
      className="dashboard-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="dashboard-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1>Deep Analytics</h1>
          <p className="text-secondary">Comprehensive breakdown of all regions and metrics.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="card glass-panel" style={{ padding: '1.5rem', minHeight: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>Overall Tree Health</h3>
          <div className="chart-animate-in" style={{ position: 'relative', width: '100%', height: '260px', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', paddingTop: '1.5rem' }}>
            <Doughnut 
              data={healthData} 
              options={doughnutChartOptions as any} 
            />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', width: '100%', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'auto' }}>
            {healthData.labels.map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: healthData.datasets[0].backgroundColor[i] 
                }}></div>
                <span style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-primary)' }}>{healthData.datasets[0].data[i].toLocaleString()}</span>
                <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card glass-panel" style={{ padding: '1.5rem', minHeight: '450px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1rem' }}>Carbon by Region</h3>
          <div style={{ flex: 1, position: 'relative', minHeight: '300px' }}>
            <Bar data={regionData} options={barChartOptions as any} />
          </div>
        </div>
      </div>

      <div className="card glass-panel" style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Tree Growth by Zones (Height Progress)</h3>
        <div style={{ height: '350px' }}>
          <Line data={zoneGrowthData} options={growthChartOptions as any} />
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
