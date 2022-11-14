import groupwatch from "../assets/watchgroup.jpg";
import Image from "next/image";

import normalpodss from "../assets/NormalPods.jpg";
import watchse from "../assets/watchse.png";
import { MdKeyboardArrowRight } from "react-icons/md";
const NormalPods = () => {
  return (
    <div className="md:w-1/2 ">
      <div className="relative flex justify-center   h-[68vh] md:h-[86vh]   overflow-hidden pt-4">
        {/* Bg mobile */}
        <div className="md:hidden absolute h-[70vh] flex  z-0 -mt-12">
          <Image src={normalpodss} className="object-cover" />
        </div>

        {/* Bg desktop */}
        <div className="hidden md:absolute md:flex h-[70vh]     md:h-[70vh] z-0   ">
          <Image src={normalpodss} className="object-cover" />
        </div>

        <div className="flex flex-col items-center z-20    md:pt-8 text-black justify-end pb-32">
          <div className="relative  font-semibold text-[35px] md:text-[60px] pt-4  ">
            AirPods
          </div>
          <div className="relative z-20   text-[20px] font-thin md:text-[27px] -mt-2 pt-2">
            Brand new with a spatial audio.
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

export default NormalPods;
