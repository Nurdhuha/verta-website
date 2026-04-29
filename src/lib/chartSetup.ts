import { Chart } from 'chart.js';

// Custom plugin to add a 3D drop shadow to charts
const shadowPlugin = {
  id: 'shadowPlugin',
  beforeDatasetsDraw: (chart: any) => {
    const ctx = chart.ctx;
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 8;
  },
  afterDatasetsDraw: (chart: any) => {
    chart.ctx.restore();
  }
};

Chart.register(shadowPlugin);
