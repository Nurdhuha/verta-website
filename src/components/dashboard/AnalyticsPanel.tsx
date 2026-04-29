import { ShieldCheck, History, Droplets, QrCode, Wrench, FileText } from 'lucide-react';
import { activityLogData, zoneInsightsData } from '../../data/mockData';
import './AnalyticsPanel.css';

const getActivityIcon = (action: string) => {
  const a = action.toLowerCase();
  if (a.includes('scan')) return <QrCode size={14} />;
  if (a.includes('replace') || a.includes('fix')) return <Wrench size={14} />;
  if (a.includes('report') || a.includes('generate')) return <FileText size={14} />;
  return <History size={14} />;
};

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
          <div className="activity-timeline">
            {activityLogData.map((entry, index) => (
              <div key={index} className="activity-node">
                <div className="activity-time-left">{entry.time}</div>
                <div className="timeline-connector"></div>
                <div className="activity-icon-node">
                  {getActivityIcon(entry.action)}
                </div>
                <div className="activity-content-box">
                  <div className="activity-user">{entry.user}</div>
                  <p className="activity-action">{entry.action}</p>
                  <span className="activity-detail">{entry.detail}</span>
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
