import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation"; // Adjust path if needed
import LandingPage from "./components/LandingPage"; // Adjust path if needed
import "./App.css";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Calling from "./components/Calling";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import { FooterComponent } from "././components/FooterComponent";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import LoadingPage from "./components/LoadingPage";

function App() {
  return (
    <>
      <Helmet>
        <title>UKA Technologies - Your Trusted Tech Partner</title>
        <meta
          name="description"
          content="UAK Technologies offers top-notch web development services using React, HTML, CSS, JavaScript, and Tailwind. Contact us for your next project!"
        />
        <meta
          property="og:title"
          content="UAK Technologies - Your Trusted Tech Partner"
        />
        <meta
          property="og:description"
          content="UAK Technologies offers top-notch web development services using React, HTML, CSS, JavaScript, and Tailwind. Contact us for your next project!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ukatechnology.com/" />
        <meta
          property="og:image"
          content="https://ukatechnology.com/./../../images/picsvg_download.svg"
        />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://ukatechnology.com",
        "name": "UAK Technologies",
        "logo": "https://ukatechnology.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "9555530011",
          "contactType": "Customer Service"
        }
      }
    `}
        </script>
        {/* <!-- Add more meta tags as needed --> */}
      </Helmet>
      <LoadingPage />
      <Navigation />
      <LandingPage />
      <WhyUs />
      <Calling />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <ContactUs />
      <FooterComponent />
    </>
  );
}

export default App;
