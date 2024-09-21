import React from "react";
import img1 from "./../../images/bank.png"; // Example image import
import img2 from "./../../images/digital-door.png"; // Example image import
import img3 from "./../../images/dvr.png"; // Example image import
import img4 from "./../../images/fingerprint.png"; // Example image import
import img5 from "./../../images/password.png"; // Example image import
import img6 from "./../../images/radio.png"; // Example image import
import img7 from "./../../images/reflection.png"; // Example image import
import img8 from "./../../images/surveillance.png"; // Example image import

function WhyUs() {
  const productData = [
    { id: 1, image: img1, name: "CCTV Security" },
    { id: 2, image: img2, name: "Biometric" },
    { id: 3, image: img3, name: "Access Control" },
    { id: 4, image: img4, name: "Video Door Phone" },
    { id: 5, image: img5, name: "Network Switches" },
    { id: 6, image: img6, name: "DVR" },
    { id: 7, image: img7, name: "NVR" },
    { id: 8, image: img8, name: "Digital Door" },
  ];

  const handleProductClick = (productName) => {
    const message = `I want to inquire about ${productName}.`;
    const phoneNumber = "919910685956"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      id="whyus"
      className="h-[80%] w-screen overflow-hidden flex flex-col items-center justify-around font-medium bg-[#f5f5f5]"
    >
      <div className="text-3xl upp h-[10%] w-full uppercase flex justify-center items-center">
        <h1 className="flex justify-center items-center -tracking-tight">
          What we offer
        </h1>
      </div>
      <div className="bttm h-[90%] w-full">
        {/* Product Grid Section */}
        <div className="grid h-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[60%] mx-auto justify-center">
          {productData.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.name)}
              className="shadow-xl h-[90%] border-[1px] md:border-0 border-black bg-white hover:shadow-2xl transition-all duration-700 cursor-pointer product max-w-[400px] w-full flex flex-col justify-center items-center rounded-xl overflow-hidden mx-auto"
            >
              <div className="imggg h-[80%] hidden md:flex justify-center items-center w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-1/3 w-auto object-cover"
                />
              </div>
              <h1 className="md:h-[20%] h-[40%] pt-12 md:pt-0 whitespace-nowrap flex justify-center items-end pb-4 text-gray-600 font-bold text-lg capitalize">
                {product.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
