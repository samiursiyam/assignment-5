

const Nev = () => {
    return (
        <div className=" shadow-2xl shadow-gray-300 h-13">
            <nav className=" flex justify-between container m-auto bg mt-4    "  >
                <div className=" flex">
                    <img src="/logo-text.png" alt="" />
          
                
                </div>
                <ul className="flex text-x text-[#475569]  gap-8">
                    <li> Home</li>
                    <li> Technologies  </li>
                    <li>Projects  </li>
                    <li>About </li>
                    <li> Contact</li>
                </ul>
                <div> 
                    <button className=" border-none rounded-3xl py-1 text-black px-4 "> Sign in</button>
                    <button className=" border-none rounded-3xl py-1 text-white px-4 bg-[#D91B7E]"> Sign in</button>
                    
                </div>
            </nav>
        </div>
    );
};

export default Nev;