import React, { useEffect, useState } from "react";
import logo from "./../../images/picsvg_download.svg"; // Adjust the path based on your project structure

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value to when you want the effect to start
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="home"
        className={`navbar ${
          isScrolled ? "scrolled" : ""
        }  w-screen h-[12%] bg-black flex overflow-hidden text-white z-50 relative`}
      >
        <div className="bleft h-full w-[40%] object-cover flex p-3 items-center">
          <a href="#Home" className="h-full w-auto">
            <img src={logo} alt="logo" className="h-full w-auto" />
          </a>
        </div>
        <div className="bright h-full w-[60%] hidden md:flex p-3 items-center justify-end text-lg">
          <div className="brlinks flex w-full justify-around">
            {[
              { name: "HOME", url: "#Home" },
              { name: "ABOUT US", url: "#about" },
              { name: "OUR PRODUCTS", url: "#product" },
              { name: "SERVICES", url: "#whyus" },
              { name: "SOLUTIONS", url: "#call" },
              { name: "CONTACT US", url: "#ContactUS" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                style={{ padding: "10px" }}
                className=" hidden md:block"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
