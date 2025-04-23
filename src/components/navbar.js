import React from "react"
import Frame from "../../public/icons/Frame.png";
import hs from "../../public/icons/handShake.png";
import Filter from "../../public/icons/Filter.png";
import Layer_2 from "../../public/icons/Layer_2.jpg";

const Navbar = () => {
  return (
    <header >
        <div className="flex p-3 border-b">
            <div className="flex gap-16 max-w-6xl mx-auto w-full overflow-x-auto">
                <div className="flex gap-[13px] items-center py-7 cursor-pointer">
                    <img src={Frame} alt="Logo" className="w-[23px] "/>
                    <span className="text-[#000000] text-lg font-NotoRashiHebrew font-bold min-w-max">
                    Overview
                    </span>
                </div>

                <div className="flex gap-[13px] items-center py-7 cursor-pointer">
                    <img src={hs} alt="Logo" className="w-[38px] "/>
                    <span className="text-[#000000] text-lg font-NotoRashiHebrew font-bold min-w-max">
                    Get Debt Help
                    </span>
                </div>

                <div className="flex gap-[13px] items-center py-7 cursor-pointer">
                    <img src={Filter} alt="Logo" className="w-6 "/>
                    <span className="text-[#000000] text-lg font-NotoRashiHebrew font-bold min-w-max">
                    Debt Consolidation
                    </span>
                </div>

                <div className="flex gap-[13px] items-center py-7 cursor-pointer">
                    <img src={Layer_2} alt="Logo" className="w-7 "/>
                    <span className="text-[#000000] text-lg font-NotoRashiHebrew font-bold min-w-max">
                    Debt Settlement
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
