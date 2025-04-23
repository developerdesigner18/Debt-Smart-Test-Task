import React from "react"
import icon from "../../public/icons/Icons.png";
import cc from "../../public/images/cc.png";
import tc from "../../public/images/Topchoice.png";

const Subheader = () => {
    return (
        <header >
            <div className="bg-[#004034] p-7">
                <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 max-lg:gap-8">
                    <div className="flex flex-col">
                        <div className="flex gap-[13px] items-center">
                            <img src={icon} className="w-[14px] "/>
                            <span className="text-[15px] text-white font-NotoRashiHebrew">Finance &gt; Debt Management</span>
                        </div>
                        <div className="text-[38px] text-white max-w-[405px] pt-4 leading-[100%] font-NotoRashiHebrew">Best Debt Settlement Companies </div>
                        <div className="text-[20px] text-white max-w-[497px] pt-[21px] font-NotoRashiHebrew">We compared 25 brands and chose the top debt relief companies</div>
                        <button className="bg-[#3AE943] pt-[21px] pb-[18px] rounded-[10px] mt-[21px] text-lg font-bold w-full max-w-[380px] font-NotoRashiHebrew">Find my match</button>
                    </div>
                    <div className="flex items-end ">
                        <img src={cc} className="md:max-h-[310px] max-h-[200px]"/>
                        <img src={tc} className="md:max-w-[279px] max-w-[180px] ml-[-157px]"/>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Subheader