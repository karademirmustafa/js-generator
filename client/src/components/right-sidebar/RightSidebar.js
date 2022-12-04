import React from 'react'
import "./right-sidebar.css";
export default function RightSidebar({isDarkModeOn,setIsDarkModeOn}) {
	return (
		<div className="lightbox flex ">
			<div className="switch">
				<button className="light-icon"><i class="fa-solid fa-sun"/></button>
				<button className="light-icon"><i class="fa-solid fa-moon"/></button>
			</div>
		</div>
	)
}
