import React, { useEffect, useState } from "react";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data.carts))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <SliderComponent {...settings}>
      {carts.map((cart, index) => (
        <div
          key={index}
          className="h-60 bg-transparent m-6 text-black rounded-lg shadow-md flex flex-col items-center justify-between space-y-3"
        >
          <div className="text-center">
            
            <p className="text-sm">Original Price: <span className="line-through">₹{cart.total}</span></p>
            <p className="text-sm text-red-600">
              Discounted: ₹{cart.discountedTotal}
            </p>
          </div>

         <div className="flex justify-center items-center flex-col">
         <div className="w-32 h-32  rounded-md overflow-hidden ">
          {cart.products?.[0]?.thumbnail && (
            <img
            src={cart.products[0].thumbnail}
            alt="product"
            className="w-full h-full object-cover rounded-md"
          />
          )}
          </div>
         </div>
         <div className="flex jusctify-center items-center flex-col">
         <h3 className="text-xl font-semibold"> {cart.products[0].title}</h3>
         </div>
        </div>
      ))}
    </SliderComponent>
  );
};

export default Slider;
