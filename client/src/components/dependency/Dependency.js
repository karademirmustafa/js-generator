import React from 'react'
import "./dependency.css"
function Dependency() {
    return (
        <>
      <div className="dependency-header">
       <h2 className="title">Dependencies</h2> 
      <div className="btn"> <span className="text-center font-medium">Add Dependencies</span> <i class="fa-solid fa-magnifying-glass"></i></div>
      </div> 
      <div className="">
        <ul className="dependencies-list">
            <li className="dependency-item">
                <strong className="dependency-name">Axios <span className="dependency-version">1.2.0</span><span className="dependency-title">dev dependencies</span></strong> 
                
                <div className="dependency-footer">
                    <span className="dependency-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, numquam!</span>
                <div className="dependency-action">
                    <button className="dependency-icon border-blue-500 rounded text-white bg-blue-600"><i class="fa-solid fa-pen"/></button>
                    <button className="dependency-icon border-red-500 rounded text-white bg-red-600"><i class="fa-solid fa-trash-can"/></button>
                </div>
                </div>
                
            </li>
            <li className="dependency-item">
                <strong className="dependency-name">Nodemon <span className="dependency-version">14.2.0</span><span className="dependency-title">dependency</span></strong> 
                
                <div className="dependency-footer">
                    <span className="dependency-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, numquam!</span>
                <div className="dependency-action">
                    <button className="dependency-icon border-blue-500 rounded text-white bg-blue-600"><i class="fa-solid fa-pen"/></button>
                    <button className="dependency-icon border-red-500 rounded text-white bg-red-600"><i class="fa-solid fa-trash-can"/></button>
                </div>
                </div>
                
            </li>
            <li className="dependency-item">
                <strong className="dependency-name">Express <span className="dependency-version">12.2.3</span><span className="dependency-title">dev dependencies</span></strong> 
                
                <div className="dependency-footer">
                    <span className="dependency-desc">Tunçerella başarırsa başarılı bir başarı olmuş olabilir tunçerella!</span>
                <div className="dependency-action">
                    <button className="dependency-icon border-blue-500 rounded text-white bg-blue-600"><i class="fa-solid fa-pen"/></button>
                    <button className="dependency-icon border-red-500 rounded text-white bg-red-600"><i class="fa-solid fa-trash-can"/></button>
                </div>
                </div>
                
            </li>
           
        </ul>
      </div>
      </> 
    )
}

export default Dependency
