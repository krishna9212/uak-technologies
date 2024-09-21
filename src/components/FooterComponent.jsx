import React from "react";

// Array of footer links with section IDs
const footerLinks = [
  { name: "Home", id: "Home" },
  { name: "About", id: "about" },
  { name: "Product", id: "product" },
  { name: "Contact Us", id: "ContactUS" },
  { name: "WhyChooseUs", id: "whych" },
  { name: "service", id: "whyus" },
];

const FooterLink = ({ name, id }) => (
  <li>
    <a
      href={`#${id}`}
      className="text-blue-500 whitespace-nowrap hover:underline"
    >
      {name}
    </a>
  </li>
);

// Main Footer Component
export function FooterComponent() {
  return (
    <footer className="bg-gray-800 overflow-hidden p-4 mt-auto w-screen">
      <div className="text-white text-center">
        <p>UKA Technology</p>
        <ul className="flex flex-col md:flex-row md:gap-8 gap-2  items-center justify-center mt-2">
          {footerLinks.map((link, index) => (
            <FooterLink key={index} name={link.name} id={link.id} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
