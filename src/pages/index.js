import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import ct_1 from "../../public/images/ct_1.png"
import ct_2 from "../../public/images/ct_2.png"
import ct_3 from "../../public/images/ct_3.png"
import ct_4 from "../../public/images/ct_4.png"
import Subheader from "../components/subHeader"

export default function Home() {
  const companies = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/National_Debt_Relief_logo.svg/320px-National_Debt_Relief_logo.svg.png",
      name: "National Debt Relief",
      rating: 4.9,
      reviews: "56,847",
      pick: "Best overall",
      minimumDebt: "$7,500",
      maxFee: "25% of debt",
      timeline: "12 to 48 months",
      founded: 2009,
    },
    {
      logo: "https://freedomdebtrelief.com/favicon-32x32.png",
      name: "Freedom Debt Relief",
      rating: 4.4,
      reviews: "33,525",
      pick: "Low fees",
      minimumDebt: "$7,500",
      maxFee: "25% of debt",
      timeline: "24 to 48 months",
      founded: 2002,
    },
    {
      logo: "https://www.uniteddebtsettlement.com/wp-content/uploads/2021/10/cropped-favicon-192x192.png",
      name: "United Debt Settlement",
      rating: 3.7,
      reviews: "115",
      pick: "Small debts",
      minimumDebt: "$5,000",
      maxFee: "25% of debt",
      timeline: "24 to 48 months",
      founded: 2016,
    },
    {
      logo: "https://accrediteddebtrelief.com/favicon.ico",
      name: "Accredited Debt Relief",
      rating: 4.9,
      reviews: "2,728",
      pick: "Customer service",
      minimumDebt: "$10,000",
      maxFee: "25% of debt",
      timeline: "24 to 48 months",
      founded: 2011,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Subheader />
      <Navbar />
      <div className="mt-[53px] max-w-6xl mx-auto mt-8 p-6">
        <div>
          <span className="text-[35px] font-NotoRashiHebrew font-bold">
            The top debt settlement companies in <br/> April 2025
          </span>
        </div>
        <div className="flex mt-[34px] gap-[30px]">
          <div className="bg-[#463AE9] border-2 border-[#463AE9]"></div>
          <div>
            <ol className="flex flex-col list-decimal list-inside">
              <li className="text-lg leading-[50px] font-NotoRashiHebrew font-bold">
                Overall choice partner:
                <a href="#" className="text-[#004034] underline text-lg ml-1">
                  National Debt Relief
                </a>
              </li>

              <li className="text-lg leading-[50px] font-NotoRashiHebrew font-bold">
                Lowest fees for services partner:
                <a href="#" className="text-[#004034] underline text-lg ml-1">
                  Freedom Debt Relief
                </a>
              </li>

              <li className="text-lg leading-[50px] font-NotoRashiHebrew font-bold">
                Best for small debt amounts partner:
                <a href="#" className="text-[#004034] underline text-lg ml-1">
                  United Debt Settlement
                </a>
              </li>

              <li className="text-lg leading-[50px] font-NotoRashiHebrew font-bold">
                Best customer service partner:
                <a href="#" className="text-[#004034] underline text-lg ml-1">
                  Accredited Debt Relief
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-[50px] max-w-6xl mx-auto mt-8 p-6">

      <div className=" flex">
        <div className="!divide-y !divide-gray-200 border border-gray-200 border-t-none custom-shadow-right z-10"><div className="h-[47px] bg-gray-200 p-3 font-bold text-[#374151]">
          Company</div>
          <div className="h-[68.8px]"><img src={ct_1} className="h-[68px]" /></div>
          <div className="h-[68.8px]"><img src={ct_2} className="h-[68px]" /></div>
          <div className="h-[68.8px] !border-t-[1px] !border-t-gray-200"><img src={ct_4} className="h-[68px]" /></div>
          <div className="h-[68.8px]"><img src={ct_3} className="h-[68px]" /></div>
          </div>

        <div className="w-full overflow-x-auto">
        <table className="w-fit text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 whitespace-nowrap">Customer rating</th>
              <th className="p-3 whitespace-nowrap">Our pick for</th>
              <th className="p-3 whitespace-nowrap">Debt minimum</th>
              <th className="p-3 whitespace-nowrap">Maximum fee</th>
              <th className="p-3 whitespace-nowrap">Settlement timeline</th>
              <th className="p-3 whitespace-nowrap">Year founded</th>
              <th className="p-3 whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody className=" border border-gray-200 divide-y divide-gray-200">
            {companies.map((company, index) => (
              <tr key={index} className="divide-x  divide-gray-200">
                <td className="p-3">
                  <div className="flex font-semibold  items-center">
                     <span className="pr-1"> {company.rating} </span> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"className="w-4 h-4  text-green-700"><path d="M12 2l3.09 6.26L22 9.27l-5.45 5.3L17.91 22 12 18.56 6.09 22l1.36-7.43L2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"className="w-4 h-4  text-green-700"><path d="M12 2l3.09 6.26L22 9.27l-5.45 5.3L17.91 22 12 18.56 6.09 22l1.36-7.43L2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"className="w-4 h-4  text-green-700"><path d="M12 2l3.09 6.26L22 9.27l-5.45 5.3L17.91 22 12 18.56 6.09 22l1.36-7.43L2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"className="w-4 h-4  text-green-700"><path d="M12 2l3.09 6.26L22 9.27l-5.45 5.3L17.91 22 12 18.56 6.09 22l1.36-7.43L2 9.27l6.91-1.01L12 2z" /></svg>
                  </div>
                  
                  <div className="text-sm text-blue-500 underline underline-offset-4 w-max">
                    {company.reviews} reviews
                  </div>
                </td>
                <td className="p-3 text-center">{company.pick}</td>
                <td className="p-3 text-center">{company.minimumDebt}</td>
                <td className="p-3 text-center">{company.maxFee}</td>
                <td className="p-3 text-center">{company.timeline}</td>
                <td className="p-3 text-center">{company.founded}</td>
                <td className="p-3">
                  <button className="bg-[#463AE9] text-white font-medium px-4 py-2 rounded-md hover:bg-[#372fcd] transition w-max">
                    Get Started
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="bg-gray-200 p-6 pt-8 rounded-b-lg">
          <button className="bg-[#463AE9] text-white font-medium px-4 py-2 rounded-md hover:bg-[#372fcd] transition w-max">
            Can we help you make a decision?
          </button>
        </div>
      </div>
        
    </div>
  )
}
