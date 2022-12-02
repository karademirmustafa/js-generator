import React from 'react'

export default function ProjectInput() {

  return (
   <>
   <label htmlFor="name" className="mt-2 text-slate-500">Name</label>
<input type="text" id="name" className="w-96 p-4 border border-black  rounded"/>
   <label htmlFor="version" className="mt-2 text-slate-500">Version</label>
<input type="text" id="version" className="w-96 p-4 border border-black  rounded"/>
   <label htmlFor="desc" className="mt-2 text-slate-500">Description</label>
<input type="text" id="desc" className="w-96 p-4 border border-black  rounded"/>
   </>
  )
}
