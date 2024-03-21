import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product,page }) => {
  
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <NavLink
            to={`/products/${product.slugable.key}`}
            
            key={product.id}
            className=" border border-gray-200 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
           <div className='relative'>
           <img src={`https://ewaiq.com/public/storage/${product.image}`} className="w-full h-56 object-cover" alt="Product" />

{/* Overlay icons */}
{hovered && (
 
    <div className="absolute z-50 inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
        <div className="flex justify-between py-5 items-end align-bottom space-x-10">
        {/*  shop icon*/}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 hover:scale-110 transition-all delay-100 ease-in-out">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
{/* view icon */}


        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 hover:scale-110 transition-all delay-100 ease-in-out">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

           
        </div>
    </div>
)}
           </div>

            <div className="p-4">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-gray-600 mb-2">{product.brand.name}</p>
                <p className="text-gray-800 font-semibold">${product.price}</p>
            </div>
        </NavLink>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

