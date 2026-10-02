import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, LayoutDashboard, BarChart3, FileText, Settings, LogOut, X } from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-placeholder">
            <Leaf size={28} color="var(--emerald-green)" />
          </div>
          <h2>VERTA</h2>
        </div>
        <button className="close-btn mobile-only" onClick={onClose} aria-label="Close Menu">
          <X size={24} color="var(--slate-grey)" />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section">
          <p className="nav-label">MENU</p>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                <LayoutDashboard size={20} />
                <span>Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                <BarChart3 size={20} />
                <span>Analytics</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                <FileText size={20} />
                <span>Reports</span>
              </NavLink>
            </li>
          </ul>
        </div>
        
        <div className="nav-section mt-auto">
          <p className="nav-label">SYSTEM</p>
          <ul>
            <li>
              <div className="nav-link-dummy">
                <Settings size={20} />
                <span>Settings</span>
              </div>
            </li>
            <li>
              <div className="nav-link-dummy logout-btn">
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
