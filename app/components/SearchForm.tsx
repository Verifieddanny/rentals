import React from 'react';

const SearchForm = () => {
  return (

    <div className='relative'>
      <div className='bg-[#f1f1f1]  p-6 rounded-lg max-w-md mx-auto'>
      <div className="space-y-4">
        <div className="relative">
          <select className="w-full p-3 bg-white rounded-md appearance-none text-gray-700 pr-8">
            <option disabled selected>Where to go?</option>
            
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        
        <div className="flex pr-4">
          <div className="flex-1 relative">
            <p >Arrive:</p>
            <input type="date" placeholder="Arrive" className="w-[95%] p-3 bg-white rounded-md pl-10" />
            
          </div>
          <div className="flex-1 relative">
            <p >Depart:</p>
            <input type="date" placeholder="Depart" className="w-[95%] p-3 bg-white rounded-md pl-10" />
            
          </div>
        </div>
        
        <div className="relative">
          <input type="text" placeholder="Guests" className="w-full p-3 bg-white rounded-md pl-10" />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </span>
        </div>
        
        <button className="w-full bg-[#010101d2] text-[#f1f1f1] font-bold py-3 px-4 rounded-md hover:bg-[#010101] transition duration-300">
          SEARCH
        </button>
      </div>

      </div>

    {/* <div className="bg-[#010101]  p-6 rounded-lg max-w-md mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <select className="w-full p-3 bg-white rounded-md appearance-none text-gray-700 pr-8">
            <option disabled selected>Where to go?</option>
            
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        
        <div className="flex pr-4">
          <div className="flex-1 relative">
            <p className='text-[#f1f1f1]'>Arrive:</p>
            <input type="date" placeholder="Arrive" className="w-[95%] p-3 bg-white rounded-md pl-10" />
            
          </div>
          <div className="flex-1 relative">
            <p className='text-[#f1f1f1]'>Deart:</p>
            <input type="date" placeholder="Depart" className="w-[95%] p-3 bg-white rounded-md pl-10" />
            
          </div>
        </div>
        
        <div className="relative">
          <input type="text" placeholder="Guests" className="w-full p-3 bg-white rounded-md pl-10" />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </span>
        </div>
        
        <button className="w-full bg-yellow-400 text-black font-bold py-3 px-4 rounded-md hover:bg-yellow-500 transition duration-300">
          SEARCH
        </button>
      </div>
    </div> */}
    </div>
  );
};

export default SearchForm;