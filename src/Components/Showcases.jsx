import React from "react";
import cushion from "../assets/cushion.jpg";
import vases from "../assets/vases.jpg";

const Showcases = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      
      {[1, 2, 3].map((block, index) => (
        <div key={index} className="w-[350px] border rounded-xl shadow-md p-4 bg-white">
          <h1 className="text-xl font-semibold text-center mb-4">Revamp Your Home in Style</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src={cushion} alt="Cushion" className="w-24 h-24 object-cover rounded-md" />
              <h6 className="mt-2">Cushions</h6>
            </div>
            <div className="flex flex-col items-center">
              <img src={vases} alt="Vases" className="w-24 h-24 object-cover rounded-md" />
              <h6 className="mt-2">Vases & More</h6>
            </div>
            <div className="flex flex-col items-center">
              <img src={cushion} alt="Curtains" className="w-24 h-24 object-cover rounded-md" />
              <h6 className="mt-2">Curtains</h6>
            </div>
            <div className="flex flex-col items-center">
              <img src={vases} alt="Lamps" className="w-24 h-24 object-cover rounded-md" />
              <h6 className="mt-2">Lamps</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcases;
