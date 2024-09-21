import React from "react";

function About() {
  return (
    <div
      id="about"
      className="min-h-[80%] md:min-h-[80%] flex justify-center items-center bg-[#e7e3e3] p-"
    >
      <div className="right w-full flex flex-col">
        <div className=" flex flex-col gap-6 md:gap-4 items-center w-full h-4/5">
          <span className=" border-b-2  border-black p-3 font-semibold whitespace-nowrap text-3xl uppercase text-green-500 ">
            About Us <span className="text-black">UKA</span>
          </span>
          <p className="text-sm pt-10 w-[90%] md:w-[70%] capitalize tracking-wide">
            We deal in CCTV cameras, biometric systems, Video Door Phone and
            other security-related products which are high performance and
            highly sensitive.
          </p>
          <p className="text-sm w-[90%] md:w-[70%] tracking-wide">
            At UKA, we excel in both the installation of cutting-edge CCTV
            camera systems and the enhancement of your current surveillance
            infrastructure.
          </p>

          <p className="text-sm w-[90%]  md:w-[70%] capitalize tracking-wide">
            Our expert team is dedicated to providing exceptional value through
            high-quality installation and maintenance services for advanced
            security products.
          </p>
          <p className="text-sm w-[90%]  md:w-[70%] capitalize tracking-wide">
            We are committed to delivering unparalleled security solutions,
            ensuring that your investment in high-precision cameras and systems
            is maximized.
          </p>
          <p className="text-sm w-[90%]  md:w-[70%] capitalize tracking-wide">
            Trust UKA for all your security needs because
          </p>
          <p className="text-sm w-[90%]  md:w-[70%] capitalize tracking-wide">
            safeguarding what matters most is a responsibility we take with the
            utmost seriousness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
