import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import RightSidebar from "./components/right-sidebar/RightSidebar";
import Action from "./components/action/Action";
import ProjectSelect from "./components/project/ProjectSelect";
import ProjectInput from "./components/project/ProjectInput";
import Dependency from "./components/dependency/Dependency";
import {useState} from "react"; 
import Modal from "./components/modal/Modal";

function App()
{
	const API_URL=process.env.REACT_APP_API;
	const [isDarkModeOn,setIsDarkModeOn]=useState(false);
	const [showModal, setShowModal]=useState(false);
	const [projectDetails,setProjectDetails]=useState({name:"",description:"",version:"1.0"});
	const [dependenciesToShow,setDependenciesToShow]=useState([{name:"Axios",version:"1.2.0",description:"Axios desc"},{name:"Nodemon",version:"14.2.0",description:"Nodemon desc"}])
	const [selectedDependencies,setSelectedDependencies]=useState([]);
	const [dependenciesToAdd,setDependenciesToAdd]=useState([]);
	const onAddDependencyClick=()=>
	{
		setShowModal(true);
	};
	const onRemoveDependencyClick=dependency=>
	{
		delete dependency.dev;
		console.log(dependency);
		setSelectedDependencies(selectedDependencies.filter(each=>each.name!==dependency.name));
		setDependenciesToShow([...dependenciesToShow,dependency]);
	}
	const onDependencySelected=dependency=>
	{
		setDependenciesToAdd([...dependenciesToAdd,{...dependency,dev:false}]);
		setDependenciesToShow(dependenciesToShow.filter(each=>each.name!=dependency.name));
	};
	const addDependencySaveOnClick=()=>
	{
		setShowModal(false);
		setSelectedDependencies([...selectedDependencies,...dependenciesToAdd]);
		setDependenciesToAdd([]);
	};
	const onDownloadClick=()=>
	{
		const urlSearchParams=new URLSearchParams(projectDetails).toString();
		const anchor = document.createElement('a');
		anchor.href = API_URL+"react?"+urlSearchParams;
		anchor.download = "";
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	};
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
						<Modal showModal={showModal} setShowModal={setShowModal} dependenciesToShow={dependenciesToShow} onDependencySelected={onDependencySelected} addDependencySaveOnClick={addDependencySaveOnClick}/>
						<Dependency onRemoveDependencyClick ={onRemoveDependencyClick } onAddDependencyClick={onAddDependencyClick} selectedDependencies={selectedDependencies} setSelectedDependencies={setSelectedDependencies}/>
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
