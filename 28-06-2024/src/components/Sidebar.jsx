import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cat Breeds</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>&copy; 2024 Cat Breeds App</p>
      </div>
    </aside>
  );
};

export default Sidebar;
