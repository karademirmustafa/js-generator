import React from 'react'
import "./right-sidebar.css";
export default function RightSidebar({isDarkModeOn,setIsDarkModeOn}) {
	return (
		<div className="lightbox flex ">
			<div className="switch">
				<button className="icon light"><i class="fa-solid fa-sun"/></button>
				<button className="icon dark"><i class="fa-solid fa-moon"/></button>
			</div>
		</div>
	)
}
