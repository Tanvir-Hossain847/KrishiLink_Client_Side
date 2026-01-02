import React from "react";
import Slider from "./Slider";
import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row lg:justify-between lg:gap-15">
      <div className="space-y-4">
        <h1 className="font-bold primary text-3xl sm:text-4xl text-emerald-600">
          Empowering Farmers, Feeding the Nation
        </h1>
        <p className="primary sm:text-lg text-sm font-bold">
          Join a trusted platform where farmers and buyers trade crops directly
          — no middlemen, no hassle.
        </p>
        <p className="primary">
          KrishiLink is a modern agricultural marketplace designed to bridge the
          gap between farmers and buyers through technology and trust. Our
          mission is to make crop trading simple, transparent, and fair for
          everyone involved in the agricultural value chain. Through KrishiLink,
          farmers can directly showcase their harvests to a wider audience, set
          fair prices, and gain better control over how their produce reaches
          the market. Buyers, on the other hand, can easily discover fresh,
          high-quality crops straight from the source, compare options, and make
          informed purchasing decisions without unnecessary intermediaries.
          Built with a focus on security, reliability, and ease of use,
          KrishiLink ensures safe transactions, clear communication, and a
          seamless trading experience. By connecting producers and consumers on
          one platform, we aim to reduce waste, improve farmer incomes, and
          promote sustainable agricultural practices while delivering freshness
          and value to buyers. KrishiLink is more than a marketplace — it is a
          step toward a smarter, more connected agricultural ecosystem.
        </p>
        <div className="">
          <Link
            className="btn bg-emerald-600 p-6 text-white text-center mt-3 hover:scale-105 transition-all duration-100"
            to={"/allcrops"}
          >
            Explore All Crops
          </Link>
        </div>
      </div>
      <div className="py-2">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default HeroBanner;
