import React from "react";
import { useProducts } from "../../context/products.context";
import CustomerReview from "../Home/components/CustomerReview";
import TrustSection from "./components/Trust";

const Cart = () => {
  return (
    <>
      <section className="cart_section my-20">
        <div className="main_container">
          <div className="w-[100%] flex items-center ">
            <h2 className="font-bold text-4xl">
              Shopping <span className="text-[#fe7d53]">Cart</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 mt-14">
            <div className="col-span-2">
              <CartList />
            </div>
            <div className="flex items-center justify-top flex-col flex-wrap">
              <CartDetails />
            </div>
          </div>
        </div>
      </section>
      <TrustSection/>
    </>
  );
};

const CartList = () => {
  const { cart, changeQuantity, deleteFromCart } = useProducts();
  return (
    <>
      <table className="w-full">
        <thead className="border-b-2">
          <th></th>
          <th></th>
          <th className="text-gray-400 pb-3 text-sm">PRODUCT</th>
          <th className="text-gray-400 pb-3 text-sm">PRICE</th>
          <th className="text-gray-400 pb-3 text-sm">QUANTITY</th>
          <th className="text-gray-400 pb-3 text-sm">SUBTOTAL</th>
        </thead>
        <tbody>
          {cart?.map((_) => {
            return (
              <tr className="border-b-2 [&_td]:py-4 [&_td]:px-5" key={_.id}>
                <td>
                  <button
                    className="font-bold"
                    onClick={() => {
                      deleteFromCart(_.id);
                    }}
                  >
                    X
                  </button>
                </td>
                <td>
                  <img
                    className="w-[70px] h-[70px] p-3 border rounded"
                    src={_.image}
                    alt=""
                  />
                </td>
                <td className="font-bold">{_.title.slice(0, 20)}</td>
                <td className="text-gray-500 font-medium">{_.price}</td>
                <td>
                  <input
                    className="border  rounded mx-2 py-3 text-gray-500 font-medium px-3 w-[50px]"
                    value={_.quantity}
                    type="text"
                    onChange={(e) => {
                      changeQuantity(_.id, e.currentTarget.value);
                    }}
                  />
                </td>
                <td className="text-gray-500 font-medium">{_.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <input
        className="border border-gray-300 rounded my-5 py-4 px-3"
        type="text"
        placeholder="Coupon Code"
      />
      <button className="bg-[#fe7d53] text-white mx-5 shalow-lg rounded py-4 px-4 shadow-lg font-bold transition hover:-translate-y-1">
        APPLY COUPON
      </button>
    </>
  );
};

const CartDetails = () => {
  const { cart } = useProducts();
  return (
    <>
      <div className="w-[80%] bg-gray-700 rounded-lg h-auto py-10 px-6 text-white">
        <h4 className="font-semibold text-2xl">Cart Totals</h4>
        <div className="grid grid-cols-2 mt-8 pl-3">
          <p className="font-medium">SUBTOTAL</p>
          <p className="font-medium">
            $
            {cart
              .reduce((a, b) => {
                return a + b.price * b.quantity;
              }, 0)
              .toFixed(2)}
          </p>
        </div>
        <div className="grid grid-cols-2 mt-8 pl-3">
          <p className="font-bold">SUBTOTAL</p>
          <p className="font-bold">
            $
            {cart
              .reduce((a, b) => {
                return a + b.price * b.quantity;
              }, 0)
              .toFixed(2)}
          </p>
        </div>
        <button className="bg-[#fe7d53] rounded w-full mt-16 py-4 shadow-lg font-bold transition hover:-translate-y-1">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </>
  );
};


export default Cart;
