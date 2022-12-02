import React from 'react'
import "./right-sidebar.css";
export default function RightSidebar() {
  return (
    <div className="lightbox flex ">
      <div className="switch">
     <button className="light-icon"> <i class="fa-solid fa-sun"/></button>
     <button className="light-icon"> <i class="fa-solid fa-moon"/></button>
      </div>
      <span className="text-xl">Melih Boşta</span>
      <i class="fa-solid fa-battery-empty text-xl"></i>
    </div>
  )
}
