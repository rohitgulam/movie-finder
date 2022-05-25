import React from "react";
import { useState, useEffect } from "react";
import { GETBANNER } from "../API";
const Recommended = () => {
  const [banner, setBanner] = useState({});

  const API_KEY = process.env.REACT_APP_MOVIE_FINDER_API_KEY;
  useEffect(() => {
    const fetchBannerImg = async () => {
      try {
        const response = await fetch(`${GETBANNER}${API_KEY}`, {
          method: "get",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setBanner(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBannerImg();
  }, []);

  console.log(banner.posters[1]);

  return (
    <div className="flex justify-center mt-10 flex-col items-center w-full text-xl ">
      <div className="md:w-[900px] mb-3 w-[380px]">
        <span className="font-medium capitalize">recommended</span> to you
      </div>
      <div className="md:w-[900px] md:h-[200px] h-[200px] w-[380px] bg-gray-200 ">
        <img
          src={`https://image.tmdb.org/t/p/original${banner.posters[1].file_path}`}
          alt=""
          className="w-full h-full bg-no-repeat bg-center bg-contain "
        />
      </div>
    </div>
  );
};

export default Recommended;
