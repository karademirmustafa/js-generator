import React from 'react'
import "./dependency.css"
function Dependency({selectedDependencies,onAddDependencyClick,onRemoveDependencyClick}) {
	return (
		<>
			<div className="dependency-header">
				<h2 className="title">Dependencies</h2> 
				<div className="btn" onClick={onAddDependencyClick}>
					<span  className="text-center font-medium">Add Dependencies</span>
					<i className="fa-solid fa-magnifying-glass"></i>
				</div>
			</div> 
			<div className="">
				<ul className="dependencies-list">
					{
						selectedDependencies.map(each=>
						<li key={each.name} className="dependency-item">
							<strong className="dependency-name">{each.name} <span className="dependency-version">{each.version}</span><span className="dependency-title">{each.dev?"dev dependencies":"Dependency"}</span></strong> 
							<div className="dependency-footer">
								<span className="dependency-desc">{each.description}</span>
								<div className="dependency-action">
									<button className="dependency-icon border-blue-500 rounded text-white bg-blue-600"><i className="fa-solid fa-pen"/></button>
									<button onClick={()=>onRemoveDependencyClick(each)} className="dependency-icon border-red-500 rounded text-white bg-red-600"><i className="fa-solid fa-trash-can"/></button>
								</div>
							</div>
						</li>)
					}
					
				</ul>
			</div>
		</> 
	)
}

export default Dependency
