import { AiOutlineSearch } from 'react-icons/ai';

export default function Modal({showModal, setShowModal, dependenciesToShow, onDependencySelected,addDependencySaveOnClick,addDependencyCancelOnClick}) {
	return (
	<>
		{showModal ? (
			<>
				<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
					<div className='relative w-auto my-6 mx-auto max-w-3xl'>
						<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t w-full'>
								<div className='flex items-center px-2 sticky top-0 bg-white w-full '>
									<AiOutlineSearch size={24} className='text-gray-700 w-1/6' />
									<input
									type='text'
									placeholder='Enter Dependency name'
									className='placeholder:text-gray-200 p-2 outline-none border w-full '
									/>
								</div>
								<button
								className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
								onClick={() => setShowModal(false)}
								>
									<span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
									×
									</span>
								</button>
							</div>
							<div className='relative p-6 flex-auto overflow-y-auto md:h-96'>
								<div className="bg-gray-200 flex flex-col   items-center justify-center ">
									{
										dependenciesToShow.map(each=>
										<button key={each.name} onClick={()=>onDependencySelected(each)} className="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
											<div className="col-span-11 xl:-ml-5">
												<p className="text-blue-600 font-semibold"> {each.name}<span className="ml-2 text-red-500">{each.version}</span></p>
											</div>
											<div className="md:col-start-2 col-span-11 xl:-ml-5">
												<p className="text-sm text-gray-800 font-light"> {each.description} </p>
											</div>
										</button>)
									}
									
								</div>
							</div>
							<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
								<button
								className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={addDependencyCancelOnClick}
								>
								Close
								</button>
								<button
								className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={addDependencySaveOnClick}
								>
								Save
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
			</>
		) : null}
	</>
	);
}
