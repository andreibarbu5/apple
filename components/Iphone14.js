import Image from "next/image";
import React from "react";
import web14 from "../assets/iph14.jpg";
import phone14 from "../assets/phone14.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Iphone14 = () => {
  return (
    <div className="relative flex justify-center   h-[68vh] md:h-[86vh]   overflow-hidden pt-4">
      {/* Bg mobile */}
      <div className="md:hidden absolute h-[70vh] flex  z-0 -mt-12">
        <Image src={web14} className="object-cover" />
      </div>

      {/* Bg desktop */}
      <div className="hidden md:absolute md:flex h-[70vh]     md:h-[90vh] z-0 bg-red-400  ">
        <Image src={web14} className="object-cover" />
      </div>

      <div className="flex flex-col items-center z-20    md:pt-8">
        <div className="text-black relative  font-semibold text-[35px] md:text-[60px]">
          iPhone 14
        </div>
        <div className="text-black relative z-20   text-[20px] font-thin md:text-[27px] -mt-2">
          Big and bigger.
        </div>
        <div className="flex items-center">
          <div className="text-blue-500 relative z-20  md:text-[20px] hover:underline ">
            Find out more
          </div>
          <MdKeyboardArrowRight className="text-blue-500 text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Iphone14;
