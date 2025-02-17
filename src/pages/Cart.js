import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart, selectCartTotal } from "../redux/slice/cartSlice";
import Header from "../components/Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-3">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-blue-500 font-bold">${item.price}</p>
                </div>

                <div className="flex w-full pr-10 justify-end items-center gap-3">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-4 text-xl font-bold">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
