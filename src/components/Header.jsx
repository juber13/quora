// import { SiQuora } from "react-icons/si";
import { CiViewBoard, CiEdit, CiSearch, CiHome, CiBellOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { RxCaretDown } from "react-icons/rx";


const Header = () => {
    return (
        <div className="bg-[#262626]  p-2 grid grid-cols-3 items-center  w-full">
            <div className="logo flex items-center gap-1  justify-center">
                {/* <SiQuora fill="red"/> */}
                <h1 className="text-2xl text-[#F4111F] font-bold">Quora</h1>
            </div>
            <div className="center flex gap-6 items-center col-span-1">
                <CiHome fill="white" className="text-2xl cursor-pointer hover:text-color" />
                <CiViewBoard fill="white" className="text-2xl cursor-pointer hover:text-color" />
                <CiEdit fill="white" className="text-2xl cursor-pointer hover:text-color" />
                <GoPeople fill="white" className="text-2xl cursor-pointer hover:text-color" />
                <CiBellOn fill="white" className="text-2xl cursor-pointer hover:text-color" />
                <div className="flex text-white  p-2 gap-1 items-center rounded-md bg-black">
                    <CiSearch className="" fill="white" />
                    <input type="text" placeholder="Search Quora" className="text-xs bg-black text-white  outline-none p-1" />
                </div>
            </div>
            <div className="right flex text-white items-center  gap-3">
                <button className=" border rounded-full text-xs px-4 py-1">Try Quora</button>
                <div className="user-avatr w-8 h-8 rounded-full border bg-red-500"></div>
                <TbWorld className="text-3xl" />
                <button className="bg-[#F4111F] text-white text-xs rounded-2xl flex  p-2 items-center">Add Questions <RxCaretDown className="text-xl" /></button>
            </div>
        </div>
    )
}

export default Header