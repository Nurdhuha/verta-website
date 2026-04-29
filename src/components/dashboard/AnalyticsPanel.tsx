import React from 'react';
import { ShieldCheck, History, Droplets } from 'lucide-react';
import { activityLogData, zoneInsightsData } from '../../data/mockData';
import './AnalyticsPanel.css';

const AnalyticsPanel = () => {
  return (
    <div className="analytics-panel card">
      <div className="section-header">
        <h3>Field Reporting</h3>
      </div>
      
      <div className="analytics-content">
        
        {/* Sampling Status */}
        <div className="analytics-widget">
          <div className="widget-title">
            <ShieldCheck size={16} />
            <span>Digital Sampling Status</span>
          </div>
          <div className="progress-container">
            <div className="progress-header">
              <span className="progress-label">Sampled this month</span>
              <span className="progress-value">450 / 500</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: '90%' }}></div>
            </div>
            <p className="progress-hint">10% remaining to reach monthly QA target.</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Zone Insights */}
        <div className="analytics-widget">
          <div className="widget-title">
            <Droplets size={16} />
            <span>Zone Insights</span>
          </div>
          {zoneInsightsData.map((insight, index) => (
            <div key={index} className={`insight-card ${insight.status} ${index > 0 ? 'mt-2' : ''}`}>
              <div className="insight-header">
                <div className={`dot ${insight.status}`}></div>
                <h4>{insight.title}</h4>
              </div>
              <p>{insight.description}</p>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        {/* Activity Log */}
        <div className="analytics-widget flex-1">
          <div className="widget-title">
            <History size={16} />
            <span>Recent Activity</span>
          </div>
          <div className="activity-list">
            {activityLogData.map((entry, index) => (
              <div key={index} className="activity-item">
                <div className="activity-time">{entry.time}</div>
                <div className="activity-details">
                  <p><strong>{entry.user}</strong> {entry.action}</p>
                  <span>{entry.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnalyticsPanel;
