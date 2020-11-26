import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Shared/Navigation";
import Sidebar from "./Shared/Sidebar";
import Footer from "./Shared/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Sidebar />
      <h1>Home</h1>
      <Footer />
    </>
  );
};

export default Home;
