import React from "react";
import { useProducts } from "../../context/products.context";
import CustomerReview from "./components/CustomerReview";
import FeaturedProducts from "./components/FeaturedProducts";
import EssentialCollections from "./components/EssentialCollections";
import TrendingProducts from "./components/TrendingProducts";
import { Link } from "react-router-dom";
import CategorySection from "./components/CategorySection";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <CustomerReview />
      <FeaturedProducts />
      <EssentialCollections />
      <TrendingProducts />
    </>
  );
};


export default Home;
