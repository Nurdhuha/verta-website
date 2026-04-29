import { Tree, ActivityLogEntry, ZoneInsight } from '../types';

// === Mock Trees (used by InteractiveMap) ===

const manualTrees: Tree[] = [
  { id: 'T-1001', lat: -6.2088, lng: 106.8456, status: 'healthy' },
  { id: 'T-1002', lat: -6.2095, lng: 106.8460, status: 'healthy' },
  { id: 'T-1003', lat: -6.2080, lng: 106.8475, status: 'attention' },
  { id: 'T-1004', lat: -6.2100, lng: 106.8450, status: 'healthy' },
  { id: 'T-1005', lat: -6.2075, lng: 106.8440, status: 'dead' },
];

const generatedTrees: Tree[] = Array.from({ length: 45 }).map((_, i) => ({
  id: `T-20${i.toString().padStart(2, '0')}`,
  lat: -6.2088 + (Math.random() - 0.5) * 0.01,
  lng: 106.8456 + (Math.random() - 0.5) * 0.01,
  status: (Math.random() > 0.8
    ? (Math.random() > 0.5 ? 'attention' : 'dead')
    : 'healthy') as Tree['status'],
}));

export const mockTrees: Tree[] = [...manualTrees, ...generatedTrees];

export const MAP_CENTER: [number, number] = [-6.2088, 106.8456];
export const MAP_ZOOM = 16;

// === Impact Tiles Data ===

export const impactTilesData = [
  {
    title: 'Total Trees Planted',
    value: '12,450',
    subtitle: 'Trembesi (Samanea saman)',
    iconName: 'TreePine' as const,
    trend: '+12% this month',
    trendPositive: true,
  },
  {
    title: 'Survival Rate',
    value: '94.2%',
    subtitle: 'With VERTA protection',
    iconName: 'Activity' as const,
    trend: '+2.1% vs average',
    trendPositive: true,
  },
  {
    title: 'Total Carbon Sequestered',
    value: '2,850',
    subtitle: 'Tons of CO2e estimated',
    iconName: 'Cloud' as const,
    trend: '+450t this quarter',
    trendPositive: true,
  },
];

// === Activity Log Data ===

export const activityLogData: ActivityLogEntry[] = [
  {
    time: '10:42 AM',
    user: 'Budi S.',
    action: 'scanned Tree T-1004',
    detail: 'Updated photo timeline',
  },
  {
    time: '09:15 AM',
    user: 'Ahmad R.',
    action: 'replaced VERTA guard',
    detail: 'Tree T-2031 - Sector 2',
  },
  {
    time: 'Yesterday',
    user: 'System',
    action: 'generated weekly report',
    detail: 'Emailed to stakeholders',
  },
];

// === Zone Insights Data ===

export const zoneInsightsData: ZoneInsight[] = [
  {
    status: 'attention',
    title: 'East Zone Needs Water',
    description:
      'Soil moisture sensors and field reports indicate low humidity in Sector 4. Recommend dispatching water truck.',
  },
  {
    status: 'healthy',
    title: 'North Zone Optimal Growth',
    description:
      'Above average diameter growth detected compared to historical baseline.',
  },
];

// === Planting Data (Overview) ===

// === Planting Data (Overview) ===

export const plantingChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      type: 'line' as const,
      label: 'Trees Planted',
      data: [800, 1500, 2400, 3200, 4100, 5000, 6200, 7500, 8800, 10000, 11200, 12450],
      borderColor: '#00d26a',
      backgroundColor: 'rgba(0, 210, 106, 0.12)',
      fill: true,
      tension: 0.45,
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#00d26a',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
      yAxisID: 'y',
    },
    {
      type: 'bar' as const,
      label: 'Carbon Offset',
      data: [150, 400, 1100, 1900, 2500, 2850, 3100, 3400, 3800, 4200, 4600, 5000],
      backgroundColor: 'rgba(0, 210, 106, 0.1)',
      hoverBackgroundColor: 'rgba(0, 210, 106, 0.2)',
      borderRadius: 4,
      barThickness: 12,
      yAxisID: 'y1',
    }
  ],
};

// === Zone Growth Data (Analytics) ===

export const zoneGrowthData = {
  labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'],
  datasets: [
    {
      label: 'North Zone',
      data: [10, 25, 45, 70, 95],
      borderColor: '#00d26a',
      backgroundColor: '#00d26a',
      tension: 0.4,
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
    {
      label: 'East Zone',
      data: [8, 20, 38, 62, 88],
      borderColor: '#f59e0b',
      backgroundColor: '#f59e0b',
      tension: 0.4,
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
    {
      label: 'South Zone',
      data: [12, 28, 52, 78, 105],
      borderColor: '#3b82f6',
      backgroundColor: '#3b82f6',
      tension: 0.4,
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
    {
      label: 'West Zone',
      data: [9, 22, 42, 68, 92],
      borderColor: '#8b5cf6',
      backgroundColor: '#8b5cf6',
      tension: 0.4,
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
  ],
};

// Backward compatibility or for specific use cases
export const growthChartData = plantingChartData;

// === Analytics Page Specific Data ===

export const healthData = {
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

export const regionData = {
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

export const commonChartOptions = {
  maintainAspectRatio: false,
  cutout: '75%',
  spacing: 4,
  layout: {
    padding: 10
  },
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 2000,
    easing: 'easeOutQuart' as const,
  },
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

export const doughnutChartOptions = {
  maintainAspectRatio: false,
  cutout: '75%',
  spacing: 4,
  layout: {
    padding: 10
  },
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 2500,
    easing: 'easeOutQuart' as const,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '600' },
      bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
      padding: 12,
      cornerRadius: 8,
    }
  }
};

export const barChartOptions = {
  ...commonChartOptions,
  maintainAspectRatio: false,
  animation: {
    duration: 1500,
    easing: 'easeOutQuart' as const,
  },
  animations: {
    y: {
      from: (ctx: any) => {
        if (ctx.type === 'data') {
          return ctx.chart.scales.y?.getPixelForValue(0) || ctx.chart.height;
        }
      },
      duration: 1500,
      easing: 'easeOutQuart' as const,
    }
  },
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

export const growthChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  animation: {
    duration: 1800,
    easing: 'easeOutQuart' as const,
  },
  animations: {
    y: {
      from: 0,
      duration: 1800,
      easing: 'easeOutQuart' as const,
    }
  },
  transitions: {
    active: {
      animation: {
        duration: 200,
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        padding: 20,
        font: { family: 'Plus Jakarta Sans', size: 12, weight: '500' },
        color: 'var(--text-secondary)'
      },
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '600' },
      bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
      padding: 12,
      cornerRadius: 8,
      displayColors: false,
      callbacks: {
        label: (context: any) => `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`
      }
    }
  },
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      ticks: {
        font: { family: 'Plus Jakarta Sans', size: 11 },
        color: 'var(--slate-grey-light)',
        padding: 10,
      }
    },
    y: {
      display: true,
      grid: {
        color: 'rgba(226, 232, 240, 0.3)',
        drawBorder: false,
        borderDash: [5, 5],
      },
      ticks: {
        font: { family: 'Plus Jakarta Sans', size: 11 },
        color: 'var(--slate-grey-light)',
        padding: 10,
        callback: (value: any) => value >= 1000 ? (value/1000) + 'k' : value
      },
    },
    y1: {
      display: false,
      grid: { display: false },
    }
  },
};
