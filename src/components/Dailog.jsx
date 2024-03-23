
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

import { AiOutlineEye } from "react-icons/ai";
 
export function ViewDialog({open,setOpen,product,handleCart}) {
 console.log(product,'product')
 
  const handleOpen = () => setOpen(!open);
  
 
  return (
    <div className="  ">
      <Button onClick={handleOpen} variant="gradient" className="hover:bg-[#4848F5] transition-all delay-75 ease-in-out rounded-full p-2">
      <AiOutlineEye
                  style={{
                    color: "#ffffff",
                    fontSize: "1.6rem",
                  }}/>
      </Button>
      <Dialog
        open={open}
        className=" h-[60vh] md:h-[50vh] lg:h-[50vh] xl:h-[60vh]  w-[80%]  left-[0%] absolute top-[20%] mx-[4rem] md:mx-[6rem] lg:mx-[7rem] xl:mx-[12rem]  "
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className=" flex items-end justify-end">
          
        <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span><div
  style={{
    backgroundColor: '#ffffff',
  }}
>
  <AiOutlineClose
    style={{
      color:' #000000',
    }}
  />
</div>

</span>
          </Button>

        </DialogHeader>
        <DialogBody className="">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center align-middle justify-evenly  ">
<div >
<img
          src={`https://ewaiq.com/public/storage/${product.image}`}
          className="w-full h-56 object-cover rounded-md"
          alt="Product"
        />

    

</div>

<div className="w-1/2 flex flex-col gap-4 ">
<h1 className="text-lg font-semibold">{product.name}</h1>
       <div>
       <p className="text-gray-600 mb-2">{product.brand.name}</p>
        <p className="text-gray-800 font-semibold">Price:${product.price}</p>
        
       </div>
        <div className="">
          {product.description}
        </div>


      <div className="flex gap-5 align-middle">

      <button   onClick={()=>handleCart(product)} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add to Cart
</button>
        <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Buy
</button>
      </div>
</div>

      </div>
        </DialogBody>
        <DialogFooter className="">
          
        </DialogFooter>
      </Dialog>
    </div>
  );
}

ViewDialog.propTypes = {
  product: PropTypes.object.isRequired,
  open:PropTypes.bool.isRequired,
  setOpen:PropTypes.func.isRequired,
  handleCart:PropTypes.func
};
