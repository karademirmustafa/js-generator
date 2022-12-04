import React from 'react';
import "./left-sidebar.css";
function LeftSidebar() {
  return (
    <div className="navigation">
      <div className='navigation-menu'>
      <a href="/" className="icon"><i class="fa-solid fa-bars"/></a>
      </div>
      <div className="navigation-social">
        Aykut tamam altta sorabilirsin
        <i class="fa-solid fa-angles-down"></i>
      <a href="https://www.youtube.com/watch?v=__f6y_M-u9k" target="_blank" className="icon hover:text-blue-600"><i class="fa-brands fa-github"/></a>
      <a href="/#" className="icon hover:text-cyan-600"><i class="fa-brands fa-twitter"/></a>
      </div>
    </div>
  );
}

export default LeftSidebar;
