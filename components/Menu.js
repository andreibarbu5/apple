import Image from "next/image";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import apple from "../assets/apple.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Menu = ({ openSidebar }) => {
  const menuBtns = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Music",
    "Help Center",
    "Shops",
  ];

  return (
    <div className="relative h-screen w-[100vw] bg-black z-50 -m-4 p-4  ">
      <div className="flex justify-between w-full">
        <MdOutlineClose
          className="text-white w-6 h-6"
          onClick={() => openSidebar()}
        />
        <Image src={apple} className="w-6 h-6" />
        <HiOutlineShoppingBag className="w-6 h-6 mr-2" />
      </div>
      <div className="relative mr-2 mt-3 items-center flex sm:mx-[2.5rem]   ">
        <input
          type="text"
          placeholder="Search apple.com"
          className="bg-[#1d1d1f] w-full p-2 rounded-[0.7rem] placeholder:text-gray-500  placeholder:font-thin pl-10 placeholder:text-[19px]"
        />
        <FiSearch className="absolute top-0 h-full ml-4 text-gray-500" />
      </div>
      <div className="border-b border-gray-600 pt-4  -ml-2"></div>
      <div className="flex flex-col space-y-4 px-10 pt-6">
        {menuBtns.map((btn) => (
          <div className="text-[19px] text-gray-300 border-b pb-1.5 border-gray-600">
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
