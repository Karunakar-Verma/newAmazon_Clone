import React from 'react';
import SearchBar from './SearchBar';
import SecondBar from './SecondBar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { remove } from '../Store/CartSlice.jsx';
import {remove} from '../Store/CartSlice.jsx';
const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartProducts.length === 0) {
    return (
      <div>
        <SearchBar />
        <SecondBar />
        <div className="text-center mt-10 text-xl">Your cart is empty.</div>
      </div>
    );
  }

  const removeFromCart = (product) => {
    dispatch(remove(product.id));
    alert("Product removed from cart!");
  }
  return (
    <div>
      <SearchBar />
      <SecondBar />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 bg-gray-100 min-h-screen">
        {cartProducts.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-3"
            />
            <h2 className="text-lg font-semibold text-center mb-2">{product.title}</h2>
            <p className="text-green-600 font-medium mb-1">${product.price}</p>
            <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
            <p className="text-sm text-yellow-600">Rating: {product.rating?.rate} ⭐</p>
            <button  onClick={() => removeFromCart(product)} className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
            Remove from Cart
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
