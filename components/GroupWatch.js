import React from "react";
import groupwatch from "../assets/watchgroup.jpg";
import Image from "next/image";

import phoneairpod from "../assets/phoneairpod.jpg";
import webairpod from "../assets/webairpod.jpg";
import watchse from "../assets/watchse.png";

import { MdKeyboardArrowRight } from "react-icons/md";
const GroupWatch = () => {
  return (
    <div className="md:w-1/2  ">
      <div className="relative flex justify-center   h-[68vh] md:h-[86vh]   overflow-hidden pt-4">
        {/* Bg mobile */}
        <div className="md:hidden absolute h-[70vh] flex  z-0 -mt-12">
          <Image src={groupwatch} className="object-cover" />
        </div>

        {/* Bg desktop */}
        <div className="hidden md:absolute md:flex h-[70vh]     md:h-[70vh] z-0 bg-red-400  ">
          <Image src={groupwatch} className="object-cover" />
        </div>

        <div className="flex flex-col items-center z-20    md:pt-8 text-black">
          <div className="relative  font-semibold text-[35px] md:text-[60px] pt-4 ">
            <Image src={watchse} />
          </div>
          <div className="relative z-20   text-[20px] font-thin md:text-[27px] -mt-2 pt-4">
            The sound of inovation.
          </div>
          <div className="flex items-center">
            <div className="text-blue-500 relative z-20  md:text-[20px] hover:underline ">
              Find out more
            </div>
            <MdKeyboardArrowRight className="text-blue-500 text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupWatch;
