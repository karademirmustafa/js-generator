import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import RightSidebar from "./components/right-sidebar/RightSidebar";
import Action from "./components/action/Action";
import ProjectSelect from "./components/project/ProjectSelect";
import ProjectInput from "./components/project/ProjectInput";
import Dependency from "./components/dependency/Dependency";

function App() {
  return (
    <div className="flex">
      <div className="sidebar-left">
      <LeftSidebar/>
      </div>
      <div className="main">
      <Header/>
      <form>
      <div className="main-layout">
       
      <div className="left overflow-auto project">
      <h2 className='title w-40'>Project </h2>
        <ProjectSelect />
        <h2 className='title w-40'>Project Details </h2>
        <ProjectInput /> 

      </div>
      <div className="right overflow-auto">
        <Dependency/>
      </div>
      </div>

      <Action/>
      </form>
       </div>
      <div className="sidebar-right">
     <RightSidebar/>
       </div>
      
    </div>
  );
}

export default App;
