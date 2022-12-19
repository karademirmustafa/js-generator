import React from 'react'
import "./action.css";
function Action({onDownloadClick,disabled}) {
	return (
		<div className="action-container ">
			<button disabled={disabled} onClick={onDownloadClick} className="action-button">Download</button>
		</div>
	)
}

export default Action
