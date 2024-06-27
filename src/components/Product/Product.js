import React from "react";
import Star from "../../assets/star.jpg";
import { useNavigate } from "react-router-dom";
import products from "../../data/data.json";
import Burger1 from "../../assets/burger1.jpg";
import Burger2 from "../../assets/burger2.jpg";
import Burger3 from "../../assets/order2.jpg";
import Burger4 from "../../assets/order3.jpg";
import Burger5 from "../../assets/mn1.jpg";
import Burger6 from "../../assets/mn2.jpg";
import Burger7 from "../../assets/mn3.jpg";
import Burger8 from "../../assets/popularmenu.jpg";


const Product = ({ id, name, description, price, image, rating }) => {
    const product = products.find((product) => product.id == id);
    const navigate = useNavigate();

    const checkImage = (image) => {
        switch(image){
            case "Burger1": 
                return <img src={Burger1} className="px-[12px] py-[1.5px]" />
            case "Burger2":
                return <img src={Burger2} className="px-[12px] py-[1.5px]" />
            case "Burger3":
                return <img src={Burger3} className="px-[12px] py-[1.5px]" />
            case "Burger4":
                return <img src={Burger4} className="px-[12px] py-[1.5px]" />
            case "Burger5":
                return <img src={Burger5} className="px-[12px] py-[1.5px]"/>
            case "Burger6":
                return <img src={Burger6} className="px-[12px] py-[1.5px]"/>
            case "Burger7":
                return <img src={Burger7} className="px-[12px] py-[1.5px]"/>
            case "Burger8":
                return <img src={Burger8} className="px-[12px] py-[1.5px]"/>
            default: 
                return;
        }
    }

    return (
        <div className="mx-1 rounded-lg shadow-md shadow-[#0000001F] w-[207px] ">
            <div className="inline-flex">
                <img src={Star} className="mt-[9px] ml-3 w-4 h-4" />
                <h2 className="font-bold text-[12px] mt-[8px] mx-1">{rating}</h2>
            </div>
            <div>
                <div className="mx-3 mt-1 flex justify-center items-center">
                    {checkImage(image)}
                </div>
                <div className="ml-3">
                    <h1 className="mt-2 font-[500] text-[15px]">{name}</h1>
                    <p className="mt-1 text-[10px] text-[#3B3B3B]/50 font-[900] w-[131px]">{description}</p>
                    <div className="mt-1 mb-10">
                        <h3 className="float-left text-[#D61355] font-bold text-[14px]">$ {price}</h3>
                        <svg className="float-right mr-[12px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate(`/detail/${id}`)}>
                            <circle cx="12" cy="12" r="12" fill="#D61355" />
                            <line x1="11.8929" y1="6.75" x2="11.8929" y2="17.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <line x1="6.75" y1="12.1071" x2="17.25" y2="12.1071" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;