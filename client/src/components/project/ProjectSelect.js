import React, {  useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({selectedProject, setSelectedProject}) => {

  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const technologies = [{name:"Node"},{name:"React"}]
  return (
<div className="font-Poppins  flex items-center justify-start">
    
    <div className="w-96   bg-font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-green-500 text-white hover:bg-blue-500  w-full my-5 p-5 flex items-center justify-between border border-black rounded ${
          !selectedProject && "text-gray-700"
        }`}
      >
        {selectedProject
          ? selectedProject?.length > 25
            ? selectedProject?.substring(0, 25) + "..."
            : selectedProject
          : "Select Technology"}
        <BiChevronDown size={20} className={`${open && "rotate-180"} text-white`} />
      </div>
      <ul
        className={`bg-white mt-2  overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter technology name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {technologies?.map((technology) => (
          <li
            key={technology?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
                technology?.name?.toLowerCase() === selectedProject?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
                technology?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (technology?.name?.toLowerCase() !== selectedProject.toLowerCase()) {
                setSelectedProject(technology?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {technology?.name}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Selector;