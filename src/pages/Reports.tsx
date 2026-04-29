import { motion } from 'framer-motion';
import { Download, FileText, Filter } from 'lucide-react';

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

const Reports = () => {
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
          <h1>ESG Reports</h1>
          <p className="text-secondary">Generate and download official environmental reports.</p>
        </div>
        <button className="btn-primary">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="card glass-panel" style={{ padding: '1.25rem', minWidth: 0 }}>
          <h3 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', paddingLeft: '0.25rem' }}>Recent Reports</h3>
          <div className="scrollable-container" style={{ WebkitOverflowScrolling: 'touch', background: 'rgba(248, 250, 252, 0.4)', borderRadius: '12px', padding: '0.75rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '550px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--slate-grey)' }}>
                  <th style={{ padding: '0.5rem 0', fontWeight: '600', fontSize: '0.75rem' }}>Report Name</th>
                  <th style={{ padding: '0.5rem 0', fontWeight: '600', fontSize: '0.75rem' }}>Date</th>
                  <th style={{ padding: '0.5rem 0', fontWeight: '600', fontSize: '0.75rem' }}>Type</th>
                  <th style={{ padding: '0.5rem 0', fontWeight: '600', textAlign: 'right', fontSize: '0.75rem' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Q1 2026 ESG Impact', date: 'Apr 01', type: 'Q' },
                  { name: 'Mar 2026 Monthly', date: 'Mar 31', type: 'M' },
                  { name: 'Carbon Audit 2026', date: 'Feb 15', type: 'A' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(226, 232, 240, 0.5)' }}>
                    <td style={{ padding: '0.85rem 0', fontWeight: '600', color: 'var(--emerald-green-dark)', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ padding: '0.35rem', background: 'var(--emerald-green-bg)', borderRadius: '8px' }}>
                          <FileText size={14} color="var(--emerald-green)" />
                        </div>
                        {row.name}
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 0', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{row.date}</td>
                    <td style={{ padding: '0.85rem 0' }}>
                      <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--slate-grey-bg)', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '600', color: 'var(--slate-grey)' }}>
                        {row.type}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 0', textAlign: 'right' }}>
                      <button style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '50%', 
                        background: 'var(--clean-white)', 
                        border: '1px solid var(--border-color)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        marginLeft: 'auto'
                      }}>
                        <Download size={16} color="var(--emerald-green)" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Generate New Report</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Report Type</label>
              <select style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--clean-white)', fontFamily: 'var(--font-family)', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <option>Monthly Impact</option>
                <option>Quarterly ESG</option>
                <option>Annual Audit</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Select Zone</label>
              <select style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--clean-white)', fontFamily: 'var(--font-family)', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none' }}>
                <option>All Zones</option>
                <option>North Zone</option>
                <option>East Zone</option>
                <option>South Zone</option>
                <option>West Zone</option>
              </select>
            </div>
            <button className="btn-primary" style={{ 
              marginTop: '1rem', 
              width: '100%', 
              justifyContent: 'center',
              height: '52px',
              background: 'linear-gradient(135deg, var(--emerald-green), var(--emerald-green-dark))',
              boxShadow: '0 4px 12px rgba(0, 210, 106, 0.25)',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              Generate PDF Report
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;
