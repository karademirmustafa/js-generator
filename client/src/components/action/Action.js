import React from 'react'
import "./action.css";
function Action({onDownloadClick}) {
	return (
		<div className="action-container ">
			<button onClick={onDownloadClick} className="action-button">Download</button>
		</div>
	)
}

export default Action
