import React, { useEffect, useState } from "react";
import Avatar from "../assets/avatar.jpg";
import BurgerBanner from "../assets/burger-banner.png";
import Popular from "../assets/popularmenu.jpg";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner3.jpg";
import { useNavigate } from "react-router-dom";
import products from "../data/data.json";
import Product from "../components/Product/Product";
import Footer from "../layouts/Footer/Footer";

function Homepage() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        <div key={0} className="bg-gradient-to-r from-[#ff1205] to-[#ffb3b3] rounded-[10px] relative overflow-hidden h-[150px]">
            <div className="ml-[22px] mt-[35px]">
                <h2 className="text-[16px] text-white font-bold w-[122px]">Special Offer for March</h2>
                <p className="text-[8px] text-white w-[113.75px]">We are here with the best desserts in town.</p>
                <button type="submit" className="mb-[21px] bg-white text-[8px] text-red-500 font-bold px-[11px] py-[6.5px] rounded">Buy Now</button>
            </div>
            <div className="absolute top-[16px] w-ful h-full right-[-70px]">
                <img src={BurgerBanner} alt="Burger Banner" className="w-full h-full object-cover" />
            </div>
        </div>,

        <img key={1} src={Banner1} className="w-full h-[150px] object-cover rounded-[10px]" />,

        <img key={2} src={Banner2} className="w-full h-[150px] object-cover rounded-[10px]" />

    ]
    //Hàm xử lý vuốt slide 
    const handleSwipe = (event) => {
        const startX = event.touches[0].clientX;
        let endX;
    
        const onTouchMove = (e) => {
            endX = e.touches[0].clientX;
        };
    
        const onTouchEnd = () => {
            if (!endX) return;
    
            const deltaX = startX - endX;
    
            if (deltaX > 50) {
                setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            } else if (deltaX < -50) {
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }
    
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
        };
    
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
    };
    
    useEffect(() =>{
        let cart = localStorage.getItem('cart');
        console.log(cart);
    })
   
    return (
        <div className="sm:hidden sm:w-full sm:font-[Poppins]">
            <div className="mx-8">
                <div className="flex justify-between">
                    <div className="mt-[58px]">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="1" x2="11" y2="1" stroke="black" stroke-width="2" stroke-linecap="round" />
                            <line x1="1" y1="7" x2="15" y2="7" stroke="black" stroke-width="2" stroke-linecap="round" />
                            <line x1="1" y1="13" x2="11" y2="13" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="inline-flex">
                        <div className="mt-[56px] ml-[47px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_88)">
                                    <path d="M7.99963 0.999844C6.54147 1.00157 5.14353 1.58159 4.11246 2.61267C3.08138 3.64374 2.50136 5.04168 2.49963 6.49984C2.49963 11.2059 7.49963 14.7606 7.71252 14.9095C7.79672 14.9683 7.89694 14.9998 7.99963 14.9998C8.10233 14.9998 8.20255 14.9683 8.28674 14.9095C8.49963 14.7606 13.4996 11.2059 13.4996 6.49984C13.4979 5.04168 12.9179 3.64374 11.8868 2.61267C10.8557 1.58159 9.45779 1.00157 7.99963 0.999844ZM8 4.50003C8.39556 4.50003 8.78224 4.61732 9.11114 4.83709C9.44004 5.05685 9.69638 5.36921 9.84776 5.73466C9.99913 6.10011 10.0387 6.50224 9.96157 6.89021C9.8844 7.27817 9.69392 7.63453 9.41421 7.91424C9.13451 8.19394 8.77814 8.38443 8.39018 8.4616C8.00222 8.53877 7.60009 8.49916 7.23463 8.34778C6.86918 8.19641 6.55682 7.94006 6.33706 7.61117C6.1173 7.28227 6 6.89559 6 6.50003C5.99999 6.23738 6.05172 5.9773 6.15223 5.73465C6.25273 5.492 6.40005 5.27151 6.58577 5.08579C6.77149 4.90008 6.99197 4.75276 7.23462 4.65225C7.47728 4.55174 7.73735 4.50002 8 4.50003Z" fill="#FF0000" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_88">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="mt-[50px]">
                            <p className="w-full py-[4px] text-[12px] text-[#4B5563]">Freedom way, Lekki phase</p>
                        </div>
                    </div>

                    <div className="mt-12 ml-[38px] float-right">
                        <img src={Avatar} className="w-8 h-8 rounded-full " />
                    </div>
                </div>
            </div>

            <div className="mx-8 mt-[17px]">
                <label class="relative block">
                    <svg className="mt-[10px] w-[17.77px] h-4 absolute left-[30px]" v iewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <input type="text" id="search" placeholder="Search" className="pl-[54px] h-9 bg-gradient-to-r from-[#FFF0F0] to-[#FFDFDF] rounded-lg w-full text-[12px]" />
                </label>
            </div>

            <div className="mx-[25px] mt-[25px] flex flex-col overflow-hidden" onTouchStart={handleSwipe}>
                {slides[currentSlide]}
            </div>
            <div className="mt-[15px] flex flex-row justify-center">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-[9px] h-[9px] rounded-full mx-1 cursor-pointer ${currentSlide === index ? "bg-[#FF0000]" : "bg-[#E2E2E2]"}`}
                    />
                ))}
            </div>


            <div className="mx-[30px]">
                <div className="mt-4 overflow-hidden w-full">
                    <div className="w-[1000px]">
                        <div className="float-left w-[126px] h-[43px] text-white text-[18px] bg-[#D61355] rounded-[7px]">
                            <h2><span className="pl-[8px] pr-[12px] text-[24px]">🍔</span>Burger</h2>
                        </div>
                        <div className="float-left ml-[12px] w-[110px] h-[43px] border-[0.7px] border-[#FF0000] text-[18px] rounded-[7px]">
                            <h2><span className="pl-[8px] pr-[8px] text-[24px]">🍕</span> Pizza</h2>
                        </div>
                        <div className="float-left ml-[12px] w-[154px] h-[43px] text-[18px] border-[0.7px] border-[#FF0000] rounded-[7px] overflow-hidden">
                            <h2><span className="pl-[8px] pr-[8px] text-[24px]">🌭</span> Sandwich</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-1 mx-[28px] flex flex-row overflow-x-hidden py-2">
                {products.map((product) =>(
                    <Product
                        key={product.key}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        rating={product.rating}
                    />
                ))}
            </div>

            <div className="mt-1 ml-[30px] mr-[23px]">
                <div className="float-left">
                    <h2 className="float-left text-[16px]">Popular Meal Menu</h2>
                </div>
                <div className="float-right py-1">
                    <h3 className="float-left text-[12px] text-[#3B3B3B80]/50 font-[500]" onClick={() => navigate('/menu')}>See All</h3>
                    <svg className="float-right ml-[7px] mt-[3px]" width="7" height="11" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L5 4.375L0 8.75" fill="#3B3B3B" fill-opacity="0.5" />
                    </svg>
                </div>
            </div>
            <div className="rounded-lg shadow-md py-[11px] h-[87px] ml-[30px] mr-[23px] mt-7">
                <div className="ml-[10px] w-full">
                    <img src={Popular} className="float-left" />
                    <div className="float-left ml-[21px] mt-[8px]">
                        <h2 className="text-[15px] font-[500]">Pepper Pizza</h2>
                        <h2 className="text[14px] text-[#3B3B3B]/30">5kg box of Pizza</h2>
                    </div>
                    <h1 className="float-right text-[#D61355] text-[22px] font-[700] mr-[23px] mt-[18px]">$15</h1>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Homepage;