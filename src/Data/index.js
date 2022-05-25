import React from "react";
import { GETBANNER } from "../API";

const API_KEY = process.env.REACT_APP_MOVIE_FINDER_API_KEY;
const fetchBannerImg = async () => {
  try {
    const response = await fetch(`${GETBANNER}${API_KEY}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchBannerImg;
