import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { PiShoppingBag } from "react-icons/pi";
import { ViewDialog } from "../Dailog";
import {ClipLoader} from 'react-spinners'
import '../../App.css'
const ProductCard = ({ product, handleCart,navigate }) => {
  const [hovered, setHovered] = useState(false);

  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };



  return (
    <div
     
      className=" border border-gray-200 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          src={`https://ewaiq.com/public/storage/${product.image}`}
          className="w-full h-56 object-cover"
          alt="Product"
        />

        {/* Overlay icons */}
        {hovered && (
          <div className="absolute z-50  inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
            <div className="flex items-center justify-center  transition-all delay-75 ease-in-out justify-between py-5  align-bottom space-x-10 ">
              {/*  shop icon*/}

         
             <button
                type="button"
                onClick={()=>handleCart(product)}
                className=" self-center hover:transition-all hover:delay-75 hover:ease-in-out transition-all delay-75 ease-in-out rounded-full p-2"
              >
                {navigate.state==='loading'? <div className="hover:bg-black w-10 h-10 rounded-full p-3 relative  ">
               <ClipLoader color="#ffffff" className=" absolute top-[.5rem] left-[.5rem]" size={25}  loading />
               </div>:<PiShoppingBag
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                  }}
                  className="hover:bg-black w-12 h-12  p-3 rounded-full"

                />}
              
                
              </button>
         

              {/* view icon */}

              <div className="">
              {
      <ViewDialog open={open} setOpen={setOpen} product={product} handleCart={handleCart}/>}
              </div>
            </div>
          </div>
        )}


      </div>

      <div className="bg-white">
   
      </div>
      <NavLink
      to={`/products/`} className="p-4">
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.brand.name}</p>
        <p className="text-gray-800 font-semibold">${product.price}</p>
      </NavLink>

    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleCart:PropTypes.func
};
