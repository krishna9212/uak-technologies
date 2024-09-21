import React, { useEffect } from "react";
import gsap from "gsap";
import image1 from "./../../images/Oz5iN001.svg";
function LoadingPage() {
  useEffect(() => {
    // Add no-scroll class to body when loading starts
    document.body.classList.add("no-scroll");

    const t2 = gsap.timeline({
      onComplete: () => {
        // Remove no-scroll class once loading is complete
        document.body.classList.remove("no-scroll");
      },
    });

    t2.fromTo(
      ".loading-page",
      { opacity: 1 },
      { opacity: 0, display: "none", duration: 1, delay: 4 }
    );

    const containerrr = document.querySelector(".containerrr");
    if (containerrr) {
      containerrr.classList.remove("overflow-hidden");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="loading-page overflow-hidden bg-white flex flex-col items-center justify-center h-screen w-screen">
      <img src={image1} alt="" id="svg" className="" />

      <div className="name-container w-full text-2xl -tracking-tighter font-extralight  flex justify-center">
        <div className="logo-name text-green-600 " style={{ opacity: 1 }}>
          UKA TECHNOLOGY
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
