import React from "react";
import Avatar from "../assets/avatar.jpg";
import Tablet from "../assets/tabler_edit.jpg";



function Profile() {
    return (
        <div className="sm:hidden sm:h-full font-[Poppins]">
            <div className="clear-both mt-[9px] mx-[33px]">
                <p className="text-[25px] font-[700]">Profile</p>
            </div>

            <div className="mt-[23px] mx-[24px]">
                <div className="">
                    <div className="flex flex-row justify-center items-center relative">
                        <img src={Avatar} className="border-[10px] w-[100px] h-[100px] border-red-200 rounded-full relative" />
                        <img src={Tablet} className="border-2 rounded-full absolute transform translate-x-8 translate-y-9" />
                    </div>
                </div>

                <div className="mt-8">
                    <p className="font-[700] text-[16px]">Persional Info</p>
                </div>
                <div className="mt-4 border rounded-[16px]">
                    <div className="mt-[8px] mx-4 flex flex-col justify-bwtween text-[14px]">
                        <div className="w-full py-[13.5px]">
                            <p className="float-left ">Your name</p>
                            <p className="float-right">Joyce Johnson</p>
                        </div>
                        <div className="w-full py-[13.5px]">
                            <p className="float-left">Occupation</p>
                            <p className="float-right">Manager</p>
                        </div>
                        <div className="w-full py-[13.5px]">
                            <p className="float-left">Employer</p>
                            <p className="float-right">Food Couriers</p>
                        </div>
                        <div className="w-full py-[13.5px] mb-2">
                            <p className="float-left">Nigeria</p>
                            <div className="float-right w-[44px] h-6 bg-gradient-to-r from-[#D61355] to-[#FF0000] rounded-full">
                                <div className="float-right h-6 w-6 border-[2px] border-red-500 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="font-[700] text-[16px]">Contact Info</p>
                </div>
                <div className="mt-4 border rounded-[16px]">
                    <div className="mt-[8px] mx-4 flex flex-col justify-bwtween text-[14px]">
                        <div className="w-full py-[13.5px]">
                            <p className="float-left ">Phone number</p>
                            <p className="float-right">+234 813 0400 445</p>
                        </div>
                        <div className="w-full py-[13.5px] mb-2">
                            <p className="float-left">Email</p>
                            <p className="float-right">ekamcy@mail.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[34px] mb-[29px]">
                    <button type="submit" className="w-full h-[56px] bg-[#D61355] text-[16px] text-white font-[900] rounded-lg">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;