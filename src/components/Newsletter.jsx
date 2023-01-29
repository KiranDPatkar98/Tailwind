import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full bg-[#2699fb] p-4">
      <div className="max-w-[1240px] md:flex justify-between py-[40px] md:px-4">
        <div className="p-3">
          <h1 className="font-bold text-white text-3xl">
            Want to learn latest IT skills?
          </h1>
          <span className="text-white">
            Sign up to our newsletter and stay upto date
          </span>
        </div>
        <div className="p-3">
          <div className="mb-[20px]">
            <input
              className="p-3 mr-2 rounded"
              type="email"
              name=""
              id=""
              placeholder="Enter email"
            />
            <button className="bg-black text-white p-3 rounded">
              Notify me
            </button>
          </div>
          <span className="text-white">
            We care about protection of your data. Read our <br />
            <a href="/" className="text-[blue]">
              privacy policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
