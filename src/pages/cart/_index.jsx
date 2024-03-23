export const updateCartsAction = async ({ request }) => {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);

  let addToCart = {};
  try {
    addToCart = await updateCart(formDataObject.id, formDataObject);
  } catch (err) {
    console.log(err);
  }

  return addToCart;
};

export const cartsLoader = async ({ request }) => {
  let cartsData = {};

  if (request.method === "GET") {
    try {
      cartsData = await gettingData("http://localhost:3001/carts", "GET");
    } catch (err) {
      console.log(err);
    }
  }

  return cartsData;
};

import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  NavLink,
  useLoaderData,
  useSubmit,
  useRevalidator,
  useNavigate,
} from "react-router-dom";
import { gettingData } from "../../api/get/fetchData";
import { deleteData } from "../../api/delete/DeleteData";
import { AuthContext } from "../../components/context/AuthContext";
import updateCart from "../../api/update/updateCart";
export default function Cart() {
  const { isCartOpen, toggleAuth } = useContext(AuthContext);

  const submit = useSubmit();

  const products = useLoaderData();
  const revalidator = useRevalidator();
  const navigate = useNavigate();
  const previousPath = "/products";

  const [subTotal, setSubTotal] = useState(0);

  const handleIncrement = (quantity, productId) => {
    const parsedQuantity = isNaN(parseInt(quantity)) ? 1 : parseInt(quantity); // Convert quantity to a number, default to 0 if NaN
    const updatedQuantity = parsedQuantity + 1; // Increment the quantity
    submit({ quantity: updatedQuantity, id: productId }, { method: "patch" });
  };

  const handleDecrement = (quantity, productId) => {
    if (quantity > 1) {
      const parsedQuantity = isNaN(parseInt(quantity)) ? 1 : parseInt(quantity); // Convert quantity to a number, default to 0 if NaN
      const updatedQuantity = parsedQuantity - 1; // Increment the quantity
      submit({ quantity: updatedQuantity, id: productId }, { method: "patch" });
    }
  };

  const handleGoBack = () => {
    navigate(previousPath, { replace: true });
    toggleAuth();
  };

  const handleDeleteCart = async (id) => {
    await deleteData(`http://localhost:3001/carts/${id}`);
    await revalidator.revalidate();
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const total = products.reduce((acc, product) => {
        const productQuantity = isNaN(parseInt(product.quantity))
          ? 1
          : parseInt(product.quantity);
        const productPrice = parseFloat(product.price);
        return acc + productPrice * productQuantity;
      }, 0);
      setSubTotal(total.toFixed(2)); // Round to 2 decimal places
    } else {
      setSubTotal(0);
    }
  }, [products]);

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={() => toggleAuth()}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleGoBack}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={`https://ewaiq.com/public/storage/${product.image}`}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{product.name}</h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.height != "null"
                                        ? `${product.height}cm`
                                        : "Doesn`t Exist"}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    {/* <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p> */}
                                    <p className="text-gray-500">
                                      Qty{" "}
                                      {product.quantity == "null"
                                        ? 1
                                        : product.quantity}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleIncrement(
                                            product.quantity,
                                            product.id
                                          )
                                        }
                                        className="mx-2 text-gray-500"
                                      >
                                        +
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleDecrement(
                                            product.quantity,
                                            product.id
                                          )
                                        }
                                        className="mx-2 text-gray-500"
                                      >
                                        -
                                      </button>
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        // onClick={()=> submit({id:product.id}, { method: "DELETE", action: "." })}
                                        onClick={() =>
                                          handleDeleteCart(product.id)
                                        }
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <NavLink
                          to=""
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </NavLink>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <NavLink
                            to={"/products"}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            // onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
