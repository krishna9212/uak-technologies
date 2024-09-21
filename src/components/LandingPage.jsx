import React, { useEffect } from "react";
import img1 from "./../../images/img1.jpg"; // First slider image
import img2 from "./../../images/img2.jpg"; // Second slider image
import img3 from "./../../images/img3.jpg"; // Third slider image
import video from "./../../images/herovideo.mp4"; // Video source

function LandingPage() {
  const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="Home"
      className="relative overflow-hidden w-screen h-[88%] flex items-center justify-center"
    >
      {/* Video Background */}
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-full object-fill"
      ></video>
    </div>
  );
}

export default LandingPage;
