"use client";

import React, { useEffect } from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  const trackVisitor = async () => {
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipResponse.json();

    const locResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const locationData = await locResponse.json();
    console.log(locationData);
    const location = locationData.city + ", " + locationData.country;

    const userAgent = navigator.userAgent;

    const visitData = JSON.parse(localStorage.getItem("visitData"));
    const oneHour = 60 * 60 * 1000;

    if (!visitData || Date.now() - visitData.timestamp > oneHour) {
      await fetch("api/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip, location, userAgent }),
      });
      localStorage.setItem(
        "visitData",
        JSON.stringify({ timestamp: Date.now() })
      );
    }
  };

  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 xl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
