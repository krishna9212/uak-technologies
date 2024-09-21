import React from "react";
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
      <LoadingPage></LoadingPage> 
      <Navigation />
      <LandingPage />
      <WhyUs></WhyUs>
      <Calling></Calling>
      <Products></Products>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <About></About>
      <ContactUs></ContactUs>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
