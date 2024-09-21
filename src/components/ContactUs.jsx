import React from "react";

function ContactUs() {
  return (
    <div
      id="ContactUS"
      className="w-screen min-h-[44.2%] md:h-[44.2%] p-1 gap-1 bg-white flex flex-col md:flex-row justify-center items-center"
    >
      {/* Map Section */}
      <div className="1 h-full md:w-[50%] w-full bg-blue-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.2420676175531!2d77.30090434326225!3d28.51155692862345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce77fce02cb83%3A0xe4311966fa10cfa9!2sMother%20Dairy%20Milk%20Shop%201013!5e0!3m2!1sen!2sin!4v1726661406020!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="black-and-white"
        ></iframe>
      </div>

      {/* Contact Details Section */}
      <div className="2 h-full md:w-[50%] w-full bg-[#f4ecec] flex flex-col justify-end">
        <h1 className="text-3xl font-semibold p-5">Contact Us</h1>

        <h1 className="flex items-center gap-5 px-6 py-4">
          <span className="text-base">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="text-sm">+91 9555530011, 9910685856</span>
        </h1>

        <h1 className="flex items-center gap-5 px-6 py-4">
          <span className="text-base">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="text-sm">ukatechnology1@gmail.com</span>
        </h1>

        <h1 className="flex items-center gap-5 px-6 py-4">
          <span className="text-base">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <span className="text-sm">
            B-1024, Gautam Puri, Phase-II, Badarpur, New Delhi-110044
          </span>
        </h1>

        {/* Social Media Links */}
        <div className="socials overflow-hidden flex text-2xl items-center gap-6 w-full px-7 py-4">
          <a
            href="https://wa.me/919910685956"
            className="overflow-hidden text-green-600 font-bold"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
