import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import RightSidebar from "./components/right-sidebar/RightSidebar";
import Action from "./components/action/Action";
import ProjectSelect from "./components/project/ProjectSelect";
import ProjectInput from "./components/project/ProjectInput";
import Dependency from "./components/dependency/Dependency";
import {useState} from "react"; 

function App() {
	const API_URL=process.env.REACT_APP_API;
	const [isDarkModeOn,setIsDarkModeOn]=useState(false);
	const [projectDetails,setProjectDetails]=useState({name:"",description:"",version:"1.0"});
	const [selectedDependencies,setSelectedDependencies]=useState([{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Nodemon",version:"14.2.0",description:"Nodemon desc",dev:true}])
	const onDownloadClick=()=>
	{
		const urlSearchParams=new URLSearchParams(projectDetails).toString();
		const anchor = document.createElement('a');
		anchor.href = API_URL+"react?"+urlSearchParams;
		anchor.download = "";
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	}
	return (
		<div className="flex">
			<div className="sidebar-left">
				<LeftSidebar/>
			</div>
			<div className="main">
				<Header/>
				<div className="main-layout">
					<div className="left project">
						<h2 className='title w-40'>Project </h2>
						<ProjectSelect />
						<h2 className='title w-40'>Project Details </h2>
						<ProjectInput projectDetails={projectDetails} setProjectDetails={setProjectDetails}/> 
					</div>
					<div className="right overflow-auto">
						<Dependency selectedDependencies={selectedDependencies} setSelectedDependencies={setSelectedDependencies}/>
					</div>
				</div>
				<Action onDownloadClick={onDownloadClick}/>
			</div>
			<div className="sidebar-right">
				<RightSidebar isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn}/>
			</div>
		</div>
	);
}

export default App;
