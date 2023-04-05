import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="https://www.geeksforgeeks.org/web-technology/">Introduction</a></li>
        <li><a href="https://www.geeksforgeeks.org/html/?ref=lbp">Getting Started</a></li>
        <li><a href="https://www.javatpoint.com/vb-net-download-and-install-visual-studio">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#components">Components</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
      </ul>
    </div>
  );
};


export default Sidebar;
