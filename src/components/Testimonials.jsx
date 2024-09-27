import React from "react";

// Reusable TestimonialCard component
const TestimonialCard = ({ icon, stat, label }) => {
  return (
    <div className="testimonial-card w-[15%] flex items-center justify-center h-full py-2 gap-7 border-b-2 md:border-b-0 md:border-r-2  border-black">
      <div className="icon w-[20%] h-full flex justify-center items-center text-5xl">
        <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
      </div>
      <div className="content w-[80%] flex flex-col">
        <p className="font-light text-base">{stat}</p>
        <h1 className="font-normal text-lg">{label}</h1>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const data = [
    { icon: "fa-users", stat: "1000+", label: "Happy Clients" },
    { icon: "fa-box", stat: "200+", label: "Have Products" },
    { icon: "fa-list-check", stat: "200+", label: "Project Done" },
    { icon: "fa-face-grin-stars", stat: "UKA", label: "are Available on" },
  ];

  return (
    <div className="w-screen min-h-[15%] py-5 overflow-hidden flex flex-col md:flex-row justify-around items-center gap-4 bg-white">
      {data.map((item, index) => (
        <TestimonialCard
          key={index}
          icon={item.icon}
          stat={item.stat}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Testimonials;
