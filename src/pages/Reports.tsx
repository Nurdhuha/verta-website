import { motion } from 'framer-motion';
import { Download, FileText, Filter } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.02 }
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
      <div className="dashboard-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1>ESG Reports</h1>
          <p className="text-secondary">Generate and download official environmental reports.</p>
        </div>
        <button className="btn-primary">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div className="card glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Recent Reports</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--slate-grey)' }}>
                  <th style={{ padding: '1rem 0', fontWeight: '500' }}>Report Name</th>
                  <th style={{ padding: '1rem 0', fontWeight: '500' }}>Date Generated</th>
                  <th style={{ padding: '1rem 0', fontWeight: '500' }}>Type</th>
                  <th style={{ padding: '1rem 0', fontWeight: '500', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Q1 2026 Environmental Impact', date: 'Apr 01, 2026', type: 'Quarterly' },
                  { name: 'March 2026 Monthly Summary', date: 'Mar 31, 2026', type: 'Monthly' },
                  { name: 'Carbon Sequestration Audit', date: 'Feb 15, 2026', type: 'Audit' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(226, 232, 240, 0.4)' }}>
                    <td style={{ padding: '1rem 0', fontWeight: '600', color: 'var(--emerald-green-dark)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FileText size={16} color="var(--slate-grey)" />
                        {row.name}
                      </div>
                    </td>
                    <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>{row.date}</td>
                    <td style={{ padding: '1rem 0' }}>
                      <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--slate-grey-bg)', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem' }}>
                        {row.type}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--emerald-green)' }}>
                        <Download size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card glass-panel" style={{ padding: '1.5rem', alignSelf: 'start' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Generate New Report</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Report Type</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--clean-white)', fontFamily: 'var(--font-family)', color: 'var(--text-primary)' }}>
                <option>Monthly Impact</option>
                <option>Quarterly ESG</option>
                <option>Annual Audit</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Select Zone</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--clean-white)', fontFamily: 'var(--font-family)', color: 'var(--text-primary)', outline: 'none' }}>
                <option>All Zones</option>
                <option>North Zone</option>
                <option>East Zone</option>
                <option>South Zone</option>
                <option>West Zone</option>
              </select>
            </div>
            <button className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              Generate PDF
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;
