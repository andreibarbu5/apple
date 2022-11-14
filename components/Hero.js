import Image from "next/image";
import React from "react";
import desktop from "../assets/desktop.jpg";
import phone from "../assets/phone.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative flex justify-center pt-16 md:pt-12 h-[68vh] md:h-[86vh]   overflow-hidden ">
      {/* Bg mobile */}
      <div className="md:hidden absolute h-[70vh] flex  z-0      -top-4">
        <Image src={phone} className="object-cover" />
      </div>

      {/* Bg desktop */}
      <div className="hidden md:absolute md:flex h-[70vh]     md:h-[90vh] z-0 -top-4">
        <Image src={desktop} className="object-cover" />
      </div>

      <div className="flex flex-col items-center z-20 md:pt-8">
        <div className="text-white relative  font-semibold text-[35px] md:text-[60px]">
          iPhone 14 Pro
        </div>
        <div className="text-white relative z-20   text-[20px] font-thin md:text-[27px] -mt-2">
          Hiper pro.
        </div>
        <div className="flex items-center">
          <div className="text-blue-500 relative z-20   text-[20px] md:text-[25px] hover:underline ">
            Read more
          </div>
          <MdKeyboardArrowRight className="text-blue-500 text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
