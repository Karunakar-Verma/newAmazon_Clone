import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {add} from '../Store/CartSlice.jsx';

const Container = () => {
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setStore(data));
  }, []);

  if (store.length === 0) return <div className="text-center mt-10 text-xl">Loading...</div>;

  const addToCart = (product) =>{
    dispatch(add(product));

  }

  return (

    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 bg-gray-100 min-h-screen">

      {store.map(product => (
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
          {/* <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p> */}
          <p className="text-green-600 font-medium mb-1">${product.price}</p>
          <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
          <p className="text-sm text-yellow-600">Rating: {product.rating?.rate} ⭐</p>
          <button  onClick={() => addToCart(product)} className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Container;
