import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
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
                {/*body*/}
                <div className='relative p-6 flex-auto overflow-y-auto md:h-96'>
                <div class="bg-gray-200 flex flex-col   items-center justify-center ">
  
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  <button class="border border-black rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" >
    
    {/* <div class="col-span-12 md:col-span-1">
      
    </div> */}
    
    <div class="col-span-11 xl:-ml-5">
      <p class="text-blue-600 font-semibold"> Axios<span className="ml-2 text-red-500">1.0.2</span></p>
    </div>
    
    <div class="md:col-start-2 col-span-11 xl:-ml-5">
      <p class="text-sm text-gray-800 font-light"> Axios http modülünü daha kolay bir hale getirip senin daha rahat istekler atmanı sağlar. </p>
    </div>
    
  </button>
  
  
  
  
  
  
</div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
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
