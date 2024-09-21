import React from "react";

const features = [
  {
    icon: "fa-video",
    title: "Online Streaming",
    description: "High quality CCTV cameras live video to your phone and PC.",
    color: "text-blue-500",
  },
  {
    icon: "fa-truck",
    title: "On Time Delivery",
    description:
      "For us, customer service is always a priority over sales. Therefore, we provide On-time delivery.",
    color: "text-red-500",
  },
  {
    icon: "fa-headset",
    title: "Dedicated Support",
    description: "Dedicated Support By CCTV Camera Delhi Security Experts.",
    color: "text-purple-500",
  },
  {
    icon: "fa-smile",
    title: "Customer Satisfaction",
    description:
      "We provide great customer satisfaction to help all your queries with configuration and installation.",
    color: "text-yellow-500",
  },
];

const Feature = ({ icon, title, description, color }) => (
  <div className="feature p-4 flex items-center flex-col justify-center bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer min-w-[220px]">
    <span className={`text-5xl ${color}`}>
      <i className={`fa-solid ${icon}`}></i>
    </span>
    <h3 className="text-xl text-green-600 font-bold mt-2 text-center">
      {title}
    </h3>
    <p className="text-sm text-gray-700 text-center mt-1">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div
      id="whych"
      className="container w-full bg-white flex justify-center items-center p-4 md:p-24"
    >
      <div className="box bg-white border-[1.8px] flex flex-col gap-4 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
        <h2 className="title font-semibold text-3xl text-center">
          WHY CHOOSE US
        </h2>
        <p className="description font-normal text-center text-gray-800 mb-6">
          Our CCTV surveillance camera systems are trusted by more than 1,000
          businesses, universities, and government facilities, and residential
          customers. Enjoy superior quality cameras, a 2-year warranty, and
          unlimited support from the industry's #1 tech support team.
        </p>
        <div className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
