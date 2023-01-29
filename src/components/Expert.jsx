import React from 'react';
import Laptop from '../assets/images/laptop.jpg';

const Expert = () => {
  return (
    <div className="max-w-[1240px] my-10 mx-auto md:grid grid-cols-3">
      <div className="col-span-1">
        <img src={Laptop} alt="" />
      </div>
      <div className="col-span-2 py-auto ml-4 flex flex-col justify-center">
        {/* <div className=""> */}
        <h1 className="text-[green] font-bold uppercase">Learn from experts</h1>
        <p className="text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          tempore expedita temporibus quo libero ducimus accusamus sint fuga ad
          rem minus in maiores excepturi assumenda harum cupiditate, tenetur
          facilis et!
        </p>
        <button className="bg-black text-white p-3 rounded w-[20%]">
          Get started
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Expert;
