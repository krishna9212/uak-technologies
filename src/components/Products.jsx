import React from "react";
import cam1 from "./../../images/360-product1.webp";
import cam2 from "./../../images/indoor.webp";
import cam3 from "./../../images/dome.webp";
import cam4 from "./../../images/wireless.webp";
import cam5 from "./../../images/hd.webp";
import cam6 from "./../../images/analog.jpg";
import cam7 from "./../../images/ip.webp";
import cam8 from "./../../images/bullet.jpg";
import cam9 from "./../../images/tm.webp";
import cam10 from "./../../images/ptz.jpg";

// Create an array of product objects to easily manage product data
const productData = [
  { id: 1, image: cam1, name: "Indoor CCTV Camera" },
  { id: 2, image: cam2, name: "Outdoor CCTV Camera" },
  { id: 3, image: cam3, name: "Dome CCTV Camera" },
  { id: 4, image: cam4, name: "Wireless CCTV Camera" },
  { id: 5, image: cam5, name: "HD CCTV Camera" },
  { id: 6, image: cam6, name: "Analog CCTV Camera" },
  { id: 7, image: cam7, name: "IP CCTV Camera" },
  { id: 8, image: cam8, name: "Bullet CCTV Camera" },
  { id: 9, image: cam9, name: "Thermal CCTV Camera" },
  { id: 10, image: cam10, name: "PTZ CCTV Camera" },
];

function Products() {
  // Function to handle product click
  const handleProductClick = (productName) => {
    const message = `I wanted to purchase the ${productName}.`;
    const phoneNumber = "919910685956"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Function to handle inquiry click
  const handleInquiry = () => {
    const message =
      "I would like to inquire about your security-related products.";
    const phoneNumber = "919910685956"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      id="product"
      className="overflow-hidden dabba min-h-screen w-screen bg-white"
    >
      <div className="products h-[75%] w-full pt-2 flex justify-center">
        <div className="w-full h-full overflow-y-auto">
          {/* Header Section */}
          <div className="heading h-[2%] bg-blue-30 flex justify-center items-center">
            <span className="border-b-2 border-black font-semibold text-3xl tracking-widest p-3">
              Our <span className="text-green-500">Products</span>
            </span>
          </div>

          {/* Subtitle Section */}
          <div className="heading h-[8%] p-1 w-full flex justify-center items-center text-center">
            <span className="font-semibold text-sm tracking-wide pt-1">
              Wide Range of Premium HD CCTV Security Cameras and Video
              Surveillance Systems with Night Vision – Tailored for Every Need
              at Affordable Prices. We also offer a variety of other security
              products. Click the "See More" button to explore our full range of
              solutions.
            </span>
          </div>

          {/* Product Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 w-[90%] mx-auto p-10 justify-center">
            {productData.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.name)}
                className="shadow-xl hover:shadow-2xl cursor-pointer product max-w-[300px] w-full flex flex-col justify-center items-center bg-white rounded-xl overflow-hidden border-[1px] mx-auto"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[70%] object-contain w-[80%]"
                />
                <h1 className="text-green-500 font-bold text-lg capitalize mt-3">
                  {product.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="seemore w-full flex justify-center items-center p-3">
        <span className="bg-green-400 p-2 h-full w-[75%] md:w-[22%] hover:w-[85%] md:hover:w-[26%] whitespace-nowrap flex items-center justify-center transition-all duration-300 font-medium rounded-xl">
          <button className="text-center" onClick={handleInquiry}>
            Inquire About Our Security Products
          </button>
        </span>
      </div>
    </div>
  );
}

export default Products;
