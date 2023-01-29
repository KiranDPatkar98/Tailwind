import React from 'react';
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className="bg-[#2699fb] py-[100px]">
      <div className="max-w-[1240px] mx-auto my-[100px] text-center font-bold">
        <div className="text-xl md:text-4xl md:py-4">Learn with us</div>
        <div className="text-white text-4xl md:text-[70px] md:py-4">
          Grow with us
        </div>
        <div className="text-white text-[20px] md:text-[50px] md:py-4">
          Learn
          <Typed
            className="pl-4"
            strings={[
              'Web Development',
              'Digital Marketing',
              'Ethical Hacking',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <button className="bg-black text-white p-3 rounded">Get started</button>
      </div>
    </div>
  );
};

export default Banner;
