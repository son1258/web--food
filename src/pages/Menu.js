import React from "react";
import Popular from "../assets/popularmenu.jpg";
import Menu1 from "../assets/mn1.jpg";
import Menu2 from "../assets/mn2.jpg";
import Menu3 from "../assets/mn3.jpg";
import Footer from "../layouts/Footer/Footer";


function Menu() {
    return (
        <div className="sm:hidden font-[Roboto]" >
            <div className="clear-both mt[10px] mx-[30px]">
                <p className="text-[25px] font-[700]">Meal Menu</p>
            </div>

            <div className="mx-[33px] mt-[14px] h-9 flex flex-row justify-center bg-gradient-to-r from-[#FFF0F0] to-[#FFDFDF] rounded-lg">
                <div className="mt-[10px] ml-[29px]">
                    <svg className="w-[17px] h-[16px]" v iewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_499)">
                            <path d="M9.04194 12.5C12.2625 12.5 14.8732 10.1495 14.8732 7.25C14.8732 4.35051 12.2625 2 9.04194 2C5.82143 2 3.21069 4.35051 3.21069 7.25C3.21069 10.1495 5.82143 12.5 9.04194 12.5Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.165 10.9624L16.5389 14" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_499">
                                <rect x="0.989288" width="17.7714" height="16" rx="7" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <label for="search" className="mx-1"></label>
                <input type="text" id="search" placeholder="Search" className="bg-gradient-to-r from-[#FFF0F0] to-[#FFDFDF] font-[900] w-[300px] text-[12]" />
            </div>

            <div className="mt-6 mx-[26px] font-[Propins]">
                <div className="rounded-[7px] shadow-md h-[87px]">
                    <div className="w-full">
                        <img className="float-left ml-[10px] mt-[11px]" src={Menu1} />
                        <div className="ml-[21px] mt-[25px] float-left font-[500]">
                            <h2 className="text-[15px]">Chicken Spagetti</h2>
                            <h2 className="text-[#3B3B3B]/30 text-[14px]">1 Big Pack</h2>
                        </div>
                        <h1 className="float-right text-[#D61355] text-[22px] font-[700] mt-[30px] mr-[25px]">$7</h1>
                    </div>
                </div>

                <div className="rounded-[7px] shadow-md h-[87px] mt-5">
                    <div className="w-full">
                        <img className="float-left ml-[10px] mt-[11px]" src={Menu2} />
                        <div className="ml-[21px] mt-[25px] float-left font-[500]">
                            <h2 className="text-[15px]">Jollof Rice</h2>
                            <h2 className="text-[#3B3B3B]/30 text-[14px]">1 Combo pack</h2>
                        </div>
                        <h1 className="float-right text-[#D61355] text-[22px] font-[700] mt-[30px] mr-[25px]">$10</h1>
                    </div>
                </div>

                <div className="rounded-[7px] shadow-md h-[87px] mt-5">
                    <div className="w-full">
                        <img className="float-left ml-[10px] mt-[11px]" src={Menu3} />
                        <div className="ml-[21px] mt-[25px] float-left font-[500]">
                            <h2 className="text-[15px]">Fruity Pancakes</h2>
                            <h2 className="text-[#3B3B3B]/30 text-[14px]">Noodle Home</h2>
                        </div>
                        <h1 className="float-right text-[#D61355] text-[22px] font-[700] mt-[30px] mr-[25px]">$12</h1>
                    </div>
                </div>
                
                <div className="rounded-[7px] shadow-md h-[87px] mt-[14px]">
                    <div className="w-full">
                        <img className="float-left ml-[10px] mt-[11px]" src={Popular} />
                        <div className="ml-[21px] mt-[25px] float-left font-[500]">
                            <h2 className="text-[15px]">Pepper Pizza</h2>
                            <h2 className="text-[#3B3B3B]/30 text-[14px]">5kg box of Pizza</h2>
                        </div>
                        <h1 className="float-right text-[#D61355] text-[22px] font-[700] mt-[30px] mr-[25px]">$15</h1>
                    </div>
                </div>
            </div>
            <div className="mt-[77px]">
                <Footer />
            </div>
        </div>
    )
}

export default Menu;