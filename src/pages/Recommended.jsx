import React from "react";
import { useState, useEffect } from "react";
const Recommended = () => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchBannerImg = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/3/images?api_key=372a237541d2e1fd93f0a867715b32e8&language=en-US",
          {
            method: "get",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBannerImg();
  }, []);
  return (
    <div className="flex justify-center mt-10 flex-col items-center w-full text-xl ">
      <div className="md:w-[900px] mb-3 w-[380px]">
        <span className="font-medium capitalize">recommended</span> to you
      </div>
      <div className="md:w-[900px] md:h-[200px] h-[200px] w-[380px] bg-gray-200 "></div>
    </div>
  );
};

export default Recommended;
