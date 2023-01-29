import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w[1240px] py-[5px] flex justify-between mx-auto items-center">
        <div className="text-3xl font-bold">Kiran D Patkar</div>

        {toggle ? (
          <AiOutlineCloseSquare
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block cursor-pointer"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resouces</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responsive menu */}
        <ul
          className={`duration-500 md:hidden w-4/12 h-screen text-white bg-black fixed top-[78px] ${
            toggle ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resouces</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
