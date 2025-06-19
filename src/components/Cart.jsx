import React from "react";
import { useContextApi } from "./ContextApi";


function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContextApi();

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-[#4f39f6] border-b pb-3 mb-4">
        Your Shopping Cart
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty cart"
              className="w-36 h-36 opacity-50 mb-5"
            />
            <p className="text-xl font-medium text-[#4f39f6] mb-2">
              Your cart is empty
            </p>
            <p className="text-gray-500 text-base">
              Start shopping to add items to your cart
            </p>
          </div>
        ) : (
          <>
            {/* Items Container */}
            <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 py-5 border-b last:border-none"
                >
                  <div className="w-28 h-28 flex items-center justify-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#4f39f6] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base font-bold mb-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        className="w-8 h-8 border rounded hover:bg-gray-200"
                        onClick={() => {
                          const newQuantity = (item.quantity || 1) - 1;
                          handleQuantityChange(item.id, newQuantity);
                        }}
                      >
                        -
                      </button>
                      <span className="text-center w-6">
                        {item.quantity || 1}
                      </span>
                      <button
                        className="w-8 h-8 border rounded hover:bg-gray-200"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (item.quantity || 1) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-green-600 text-sm">In Stock</p>
                    <p className="text-gray-500 text-sm">FREE delivery</p>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[100px]">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="border px-3 py-1 rounded text-sm text-[#4f39f6] hover:bg-[#f0f2ff]"
                    >
                      Delete
                    </button>
                    <button className="border px-3 py-1 rounded text-sm text-[#4f39f6] hover:bg-[#f0f2ff]">
                      Save for later
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="w-full md:w-[300px]">
              <div className="bg-white rounded-lg p-4 shadow-md sticky top-5">
                <h3 className="text-xl font-medium mb-4 text-[#4f39f6]">
                  Order Summary
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Subtotal ({cartItems.length} items):</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Shipping:</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Tax:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-3 mb-4">
                  <span className="text-gray-700">Order Total:</span>
                  <span className="text-red-600">
                    ${calculateTotal().toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-2 bg-[#FFD814] hover:bg-[#F7CA00] border border-yellow-400 rounded font-medium">
                  Proceed to Checkout
                </button>
                <div className="flex justify-around items-center mt-4">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
                    alt="PayPal"
                    className="h-5 object-contain"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                    className="h-5 object-contain"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-5 object-contain"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
