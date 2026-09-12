import React from 'react';

const Headers = () => {
    return (
        <header className='container m-auto flex justify-between items-center'>
            <div className=''>

                <h2 className='text-5xl font-bold'>Build Your Ideal </h2>
                <h2 className='text-5xl font-bold bg-gradient-to-r from-[#f36601] to-[#1a039a] bg-clip-text text-transparent mb-3'>Development Stack </h2>
                <p className='mb-10'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>

                    <div className='flex gap-2'>
                        <button className='px-5 py-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold shadow-lg hover:scale-105 transition duration-300'>Explore Technologies</button>
                        <button className='px-5 py-2 rounded-full  text-black font-semibold shadow-lg hover:scale-105 transition duration-300 border border-gray-300' >Explore Technologies</button>
              
                    </div>

            </div>
            <div>
                <img src="/src/assets/banner-stack.png" alt="" />
            </div>
        </header>
    );
};

export default Headers;