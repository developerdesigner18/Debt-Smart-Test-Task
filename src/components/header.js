import React from "react"
import logo from "../../public/images/Logo.jpg";

const Header = () => {
  return (
    <header >
      <div className="flex bg-[#DDDDDD] p-3">
        <span className="w-full text-center font-NotoRashiHebrew text-[#918A8A] text-lg">
          We are not a government agency and may be paid by companies displayed.
        </span>
      </div>
      <img src={logo} alt="Logo" className="w-[177px] mx-auto mb-[15px]"/>
    </header>
  )
}

export default Header
