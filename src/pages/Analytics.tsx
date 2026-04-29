import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

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

const healthData = {
  labels: ['Healthy', 'Needs Attention', 'Dead'],
  datasets: [
    {
      label: '# of Trees',
      data: [11500, 800, 150],
      backgroundColor: [
        'rgba(0, 210, 106, 0.9)',
        'rgba(245, 158, 11, 0.9)',
        'rgba(239, 68, 68, 0.9)',
      ],
      hoverBackgroundColor: [
        'rgba(0, 210, 106, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)',
      ],
      borderWidth: 0,
      hoverOffset: 8,
    },
  ],
};

const regionData = {
  labels: ['North Zone', 'East Zone', 'South Zone', 'West Zone'],
  datasets: [
    {
      label: 'Carbon Sequestered (Tons)',
      data: [650, 420, 980, 800],
      backgroundColor: 'rgba(0, 210, 106, 0.85)',
      hoverBackgroundColor: 'rgba(0, 210, 106, 1)',
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

const commonChartOptions = {
  cutout: '75%',
  spacing: 4,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
        font: { family: 'Plus Jakarta Sans', size: 12, weight: '500' },
        color: 'var(--text-secondary)'
      }
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '600' },
      bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
      padding: 12,
      cornerRadius: 8,
    }
  }
};

const barChartOptions = {
  ...commonChartOptions,
  maintainAspectRatio: false,
  plugins: {
    ...commonChartOptions.plugins,
    legend: { display: false }
  },
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { font: { family: 'Plus Jakarta Sans', size: 12 }, color: 'var(--slate-grey-light)' }
    },
    y: {
      grid: { color: 'rgba(226, 232, 240, 0.5)', borderDash: [5, 5], drawBorder: false },
      ticks: { font: { family: 'Plus Jakarta Sans', size: 12 }, color: 'var(--slate-grey-light)', padding: 10 }
    }
  }
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="card glass-panel" style={{ padding: '1.5rem', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>Overall Tree Health</h3>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px', marginBottom: '1.5rem' }}>
            <Doughnut 
              data={healthData} 
              options={{
                ...commonChartOptions,
                plugins: {
                  ...commonChartOptions.plugins,
                  legend: { display: false }
                }
              } as any} 
            />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
            {healthData.labels.map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: healthData.datasets[0].backgroundColor[i] 
                }}></div>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)' }}>{healthData.datasets[0].data[i].toLocaleString()}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card glass-panel" style={{ padding: '1.5rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1rem' }}>Carbon by Region</h3>
          <div style={{ flex: 1, position: 'relative', minHeight: '300px' }}>
            <Bar data={regionData} options={barChartOptions as any} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
