import Image from "next/image";
import React from "react";
import { HiOutlineMenuAlt4, HiOutlineShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
// GrClose
import apple from "../assets/apple.png";
import NavBtn from "./NavBtn";
import Menu from "./Menu";
const buttons = [
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Only on Apple",
  "Accessories",
  "Support",
];
const Navbar = ({ openSidebar, isOpen }) => {
  return (
    <div className=" bg-black w-[100vw] ">
      <div className="  fixed top-0 flex  text-white p-3  z-40  justify-between md:pt-4   w-full      backdrop-blur-md   lg:px-[7rem] xl:px-[12rem] bg-black/80 ">
        {isOpen ? (
          <div className="md:hidden ">
            <Menu openSidebar={openSidebar} isOpen={isOpen} />
          </div>
        ) : (
          <div className="md:hidden " onClick={() => openSidebar()}>
            <HiOutlineMenuAlt4 className="w-6 h-6 " />
          </div>
        )}

        <div className="absolute left-1/2  -translate-x-1/2  md:hidden    w-6   h-6">
          <Image src={apple} className="" />
        </div>
        <div className="md:hidden text-white ">
          <HiOutlineShoppingBag className="w-6 h-6 " />
        </div>
        <div className="md:flex w-full hidden px-4   ">
          <div className="mr-10 w-5 h-5 shrink-0">
            <Image src={apple} className="" />
          </div>
          <div className="flex space-x-4 justify-between w-full  ">
            {buttons.map((button) => (
              <NavBtn text={button} />
            ))}
          </div>
          <div className="ml-10  w-5   h-5 shrink-0">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
