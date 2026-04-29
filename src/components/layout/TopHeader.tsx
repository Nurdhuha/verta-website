import React from 'react';
import { Bell, Search, Download, Menu } from 'lucide-react';
import './TopHeader.css';

interface TopHeaderProps {
  onToggleSidebar: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="top-header">
      <div className="search-bar-wrapper">
        <button className="menu-toggle-btn" onClick={onToggleSidebar} aria-label="Toggle Menu">
          <Menu size={24} color="var(--slate-grey)" />
        </button>
        <div className="search-bar">
          <Search size={18} color="var(--slate-grey)" />
          <input type="text" placeholder="Search trees, locations, or reports..." />
        </div>
      </div>

      <div className="header-actions">
        <button className="btn-primary desktop-only">
          <Download size={18} />
          <span>One-Click ESG Report</span>
        </button>
        
        <div className="notification-btn">
          <Bell size={20} color="var(--slate-grey)" />
          <span className="badge">3</span>
        </div>

        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=CSR+Admin&background=10b981&color=fff" alt="User Profile" />
          <div className="user-info">
            <span className="user-name">CSR Admin</span>
            <span className="user-role">Acme Corp</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
