import React from 'react';

const Navbar3 =()=>{
    return(
        <>
        <header className="bg-[#f5f5f5] w-full h-[60px]  flex items-center justify-center">
  <nav className="flex flex-col items-center">
    <span className="font-bold text-black text-base">
      Hello Nike App
    </span>
    <span className="text-sm text-black">
      Download the app to access everything Nike.{' '}
      <a href="#" className="underline hover:text-blue-500">
        Get your great
      </a>
    </span>
  </nav>
</header>
        
        </>
    )
}

export default Navbar3;