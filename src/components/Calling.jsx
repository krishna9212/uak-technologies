import React from "react";

const Calling = () => {
  return (
    <>
      <div
        id="call"
        className="Calling py-4 overflow-hidden w-screen text-white h-[75%] md:h-[35%]  flex  flex-col justify-center items-center"
      >
        <div className="box h-[90%] w-[95%] flex  flex-col justify-center items-center">
          <h1 className="h-[30%] w-[98%]  flex justify-center items-center  text-center tracking-wide  text-2xl font-bold ">
            PREMIUM SECURITY PRODUCTS & INSTALLATION
          </h1>
          <p className="h-[40%] md:h-[25%] w-[92%]   flex justify-center text-center text-xl font-light">
            We are the trusted name for delivering and installing top-notch
            security solutions. We understand that few things are inevitable,
            security for instance. With UAK, your security is our priority.
          </p>

          {/* Dialer Button */}
          <button
            onClick={() => (window.location.href = "tel:+919910685956")}
            className="call-button mt-5 p-1 md:p-3 border-2 gap-4  border-white w-[92%] md:w-[30%] bg-purple-700 hover:bg-purple-900 transition-all duration-700 flex justify-center items-center rounded-full"
          >
            <span className="phone-icon text-2xl text-white pl-2 md:pl-0">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span className="font-semibold phone-number text-lg whitespace-nowrap">
              Call Us
            </span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/919910685956")
            }
            className="whatsapp-button mt-3 p-1 md:p-3 border-2 gap-4 border-white w-[92%] md:w-[30%] bg-green-500 hover:bg-green-700 transition-all duration-700 flex justify-center items-center rounded-full"
          >
            <span className="whatsapp-icon text-2xl text-white pl-2 md:pl-0">
              <i className="fa-brands fa-whatsapp"></i>
            </span>
            <span className="font-semibold whatsapp-number text-lg whitespace-nowrap">
              WhatsApp Us
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Calling;
