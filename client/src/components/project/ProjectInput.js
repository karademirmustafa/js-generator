import React from 'react'

export default function ProjectInput({projectDetails,setProjectDetails})
{
	const handler=e=>
	{
		setProjectDetails({...projectDetails,[e.target.id]:e.target.value});
	}
	return (
		<>
			<label htmlFor="name" className="mt-2 text-slate-500">Name</label>
			<input onChange={handler} value={projectDetails.name} type="text" id="name" className="w-96 p-4 border border-black  rounded"/>
			<label htmlFor="version" className="mt-2 text-slate-500">Version</label>
			<input onChange={handler} value={projectDetails.version} type="text" id="version" className="w-96 p-4 border border-black  rounded"/>
			<label htmlFor="description" className="mt-2 text-slate-500">Description</label>
			<input onChange={handler} value={projectDetails.description} type="text" id="description" className="w-96 p-4 border border-black  rounded"/>
		</>
	)
}
