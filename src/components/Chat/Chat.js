import React from "react";

function Chat() {
    return (
        <div className="sm:hidden font-[Poppins] relative">
            <div className="clear-both">
                <p className="px-6 py-4 text-4xl font-bold">Chat</p>
            </div>

            <div className="mx-6 mt-8" >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="#D61355" />
                    <path d="M21 30.75C21 30.5511 21.079 30.3603 21.2197 30.2197C21.3603 30.079 21.5511 30 21.75 30H26.25C26.4489 30 26.6397 30.079 26.7803 30.2197C26.921 30.3603 27 30.5511 27 30.75C27 30.9489 26.921 31.1397 26.7803 31.2803C26.6397 31.421 26.4489 31.5 26.25 31.5H21.75C21.5511 31.5 21.3603 31.421 21.2197 31.2803C21.079 31.1397 21 30.9489 21 30.75ZM16.5 24.093C16.5 22.14 18.3525 20.6475 20.295 20.829C22.7596 21.059 25.2403 21.059 27.705 20.829C29.6475 20.6475 31.5 22.14 31.5 24.093V25.8285C31.5061 26.1604 31.3941 26.4836 31.1839 26.7405C30.9737 26.9975 30.679 27.1713 30.3525 27.231C29.085 27.4515 26.8425 27.75 24 27.75C21.1575 27.75 18.915 27.45 17.6475 27.231C17.321 27.1713 17.0263 26.9975 16.8161 26.7405C16.6059 26.4836 16.4939 26.1604 16.5 25.8285V24.093ZM23.313 22.8525C23.2545 22.8426 23.1946 22.8466 23.138 22.8643C23.0814 22.8821 23.0298 22.913 22.9875 22.9545L21.6075 24.3045C20.6689 24.2485 19.7327 24.157 18.801 24.03C18.7044 24.0204 18.6079 24.0486 18.5317 24.1087C18.4556 24.1687 18.4056 24.256 18.3924 24.3521C18.3792 24.4482 18.4038 24.5457 18.4609 24.6241C18.5181 24.7025 18.6034 24.7557 18.699 24.7725C19.524 24.8865 20.547 24.996 21.729 25.062C21.7811 25.0649 21.8332 25.057 21.882 25.0386C21.9308 25.0203 21.9752 24.992 22.0125 24.9555L23.1435 23.8515L24.414 26.4165C24.4408 26.4703 24.4801 26.5169 24.5286 26.5523C24.5771 26.5878 24.6335 26.611 24.6929 26.6202C24.7523 26.6293 24.813 26.624 24.8699 26.6047C24.9269 26.5855 24.9783 26.5528 25.02 26.5095L26.418 25.0545C27.3822 24.9972 28.3439 24.9032 29.301 24.7725C29.3966 24.7557 29.4819 24.7025 29.5391 24.6241C29.5962 24.5457 29.6208 24.4482 29.6076 24.3521C29.5944 24.256 29.5444 24.1687 29.4682 24.1087C29.3921 24.0486 29.2955 24.0204 29.199 24.03C28.392 24.141 27.3885 24.2475 26.229 24.3135C26.1346 24.3187 26.0457 24.3595 25.98 24.4275L24.849 25.605L23.586 23.055C23.5597 23.0021 23.5212 22.9562 23.4738 22.921C23.4263 22.8859 23.3712 22.8624 23.313 22.8525Z" fill="white" />
                    <path d="M24.75 14.799C25.036 14.6339 25.2595 14.3791 25.3858 14.074C25.5122 13.7689 25.5344 13.4307 25.4489 13.1117C25.3634 12.7928 25.1751 12.511 24.9131 12.3099C24.6512 12.1089 24.3302 12 24 12C23.6698 12 23.3488 12.1089 23.0869 12.3099C22.8249 12.511 22.6366 12.7928 22.5511 13.1117C22.4656 13.4307 22.4878 13.7689 22.6142 14.074C22.7405 14.3791 22.964 14.6339 23.25 14.799V16.5H20.25C18.4598 16.5 16.7429 17.2112 15.477 18.477C14.2112 19.7429 13.5 21.4598 13.5 23.25V24C13.1022 24 12.7206 24.1581 12.4393 24.4394C12.158 24.7207 12 25.1022 12 25.5V28.5C12 28.8978 12.158 29.2794 12.4393 29.5607C12.7206 29.842 13.1022 30 13.5 30V31.5C13.5 32.2957 13.8161 33.0587 14.3787 33.6213C14.9413 34.1839 15.7044 34.5 16.5 34.5H31.5C32.2956 34.5 33.0587 34.1839 33.6213 33.6213C34.1839 33.0587 34.5 32.2957 34.5 31.5V30C34.8978 30 35.2794 29.842 35.5607 29.5607C35.842 29.2794 36 28.8978 36 28.5V25.5C36 25.1022 35.842 24.7207 35.5607 24.4394C35.2794 24.1581 34.8978 24 34.5 24V23.25C34.5 21.4598 33.7888 19.7429 32.523 18.477C31.2571 17.2112 29.5402 16.5 27.75 16.5H24.75V14.799ZM33 23.25V31.5C33 31.8978 32.842 32.2794 32.5607 32.5607C32.2794 32.842 31.8978 33 31.5 33H16.5C16.1022 33 15.7206 32.842 15.4393 32.5607C15.158 32.2794 15 31.8978 15 31.5V23.25C15 21.8576 15.5531 20.5223 16.5377 19.5377C17.5223 18.5531 18.8576 18 20.25 18H27.75C29.1424 18 30.4777 18.5531 31.4623 19.5377C32.4469 20.5223 33 21.8576 33 23.25Z" fill="white" />
                </svg>

                <div className="mt-4 bg-gray-100 text-sm rounded-r-[15px] rounded-bl-[15px]">
                    <p className="py-2 mx-4">Hello! my name is Food Couriers before we start, what is your name?</p>
                </div>
                <div className="float-right mt-5 bg-red-500 text-sm text-white rounded-l-[15px] rounded-br-[15px]">
                    <p className="px-3 py-2">Emmanuel kamcy</p>
                </div>
                <div className="mt-20 bg-gray-100 text-sm rounded-r-[15px] rounded-bl-[15px]">
                    <p className="py-2 mx-4">Hello! <span className="text-red-500">Emmanuel👋</span>. I can converse in your preferred language. How may I help you today?</p>
                </div>
                <div className="float-right mt-5 bg-red-500 text-sm text-white rounded-l-[15px] rounded-br-[15px]">
                    <p className="px-3 py-2">Is there Fried Rice and pepper chicken?</p>
                </div>
                <div className="mt-20 px-3 py-5 bg-gray-100 text-sm rounded-r-[15px] rounded-bl-[15px] flex flex-row relative">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full absolute top-1/4 mx-3 "></div>
                    <div className="w-2 h-2 bg-black rounded-full ml-4 mr-2"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full mx-2"></div>

                </div>
            </div>
            <div className="mt-[106px] mx-6 flex justify-between mb-9">
                <svg className="" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="7" fill="url(#paint0_linear_1_5952)" />
                    <path d="M26 30C26.3259 30.3326 26.7148 30.5968 27.1441 30.7772C27.5734 30.9576 28.0344 31.0505 28.5 31.0505C28.9656 31.0505 29.4266 30.9576 29.8559 30.7772C30.2852 30.5968 30.6741 30.3326 31 30L35 26C35.663 25.337 36.0355 24.4377 36.0355 23.5C36.0355 22.5623 35.663 21.6631 35 21C34.337 20.337 33.4377 19.9645 32.5 19.9645C31.5623 19.9645 30.663 20.337 30 21L29.5 21.5" stroke="#D61355" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.9999 26C29.674 25.6674 29.285 25.4032 28.8558 25.2228C28.4265 25.0424 27.9655 24.9495 27.4999 24.9495C27.0343 24.9495 26.5733 25.0424 26.144 25.2228C25.7147 25.4032 25.3258 25.6674 24.9999 26L20.9999 30C20.3368 30.6631 19.9644 31.5624 19.9644 32.5C19.9644 33.4377 20.3368 34.337 20.9999 35C21.6629 35.6631 22.5622 36.0356 23.4999 36.0356C24.4376 36.0356 25.3368 35.6631 25.9999 35L26.4999 34.5" stroke="#D61355" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_1_5952" x1="-7.9411e-08" y1="-3.43859" x2="64.6467" y2="6.57746" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF0F0" />
                            <stop offset="1" stop-color="#FFDFDF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="ml-[12px] h-[56px] bg-[#F9FAFB] flex justify-between">
                    <input type="text" className="text-[14px] text-[#00000080]/50 font-[700]" placeholder="Food Runs typing....."></input>
                    <svg className="mt-4" width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_5960)">
                            <path d="M19 6L25 12L19 18" stroke="#D61355" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <g clip-path="url(#clip1_1_5960)">
                            <path d="M9 6L15 12L9 18" stroke="#D61355" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_5960">
                                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 34 0)" />
                            </clipPath>
                            <clipPath id="clip1_1_5960">
                                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Chat;