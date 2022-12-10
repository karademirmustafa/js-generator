import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import RightSidebar from "./components/right-sidebar/RightSidebar";
import Action from "./components/action/Action";
import ProjectSelect from "./components/project/ProjectSelect";
import ProjectInput from "./components/project/ProjectInput";
import Dependency from "./components/dependency/Dependency";
import {useState} from "react"; 

function App() {
	const [isDarkModeOn,setIsDarkModeOn]=useState(false);
	const [selectedDependencies,setSelectedDependencies]=useState([{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Nodemon",version:"14.2.0",description:"Nodemon desc",dev:true},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false},{name:"Axios",version:"1.2.0",description:"Axios desc",dev:false}])
	return (
		<div className="flex">
			<div className="sidebar-left">
				<LeftSidebar/>
			</div>
			<div className="main">
				<Header/>
				<form>
					<div className="main-layout">
						<div className="left project">
							<h2 className='title w-40'>Project </h2>
							<ProjectSelect />
							<h2 className='title w-40'>Project Details </h2>
							<ProjectInput /> 
						</div>
						<div className="right overflow-auto">
							<Dependency selectedDependencies={selectedDependencies} setSelectedDependencies={setSelectedDependencies}/>
						</div>
					</div>
					<Action/>
				</form>
			</div>
			<div className="sidebar-right">
				<RightSidebar isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn}/>
			</div>
		</div>
	);
}

export default App;
