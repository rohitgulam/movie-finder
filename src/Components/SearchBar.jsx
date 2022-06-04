import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { SEARCH as searchApi, IMAGE_API as imgUrl, imageSize } from "../API";

import SearchResults from "./SearchResults";
function SearchBar({ hideSearch, poster, title, year, popularity }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const response = await fetch(`${searchApi}${search}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const movies = await response.json();
      setSearchResults(movies);
    };
    searchMovies();
  }, [search]);

  const movies = searchResults.results;

  console.log(movies);

  return (
    <div className="bg-[#595bf0]/50 position absolute bottom-0 top-0 left-0 right-0">
      <div className="absolute right-3 top-3" onClick={hideSearch}>
        <button>
          <AiOutlineCloseCircle
            style={{ fontSize: "30px", color: "white", textShadow: "#595bf0" }}
          />
        </button>
      </div>
      <div className="flex flex-col  ">
        <div className=" flex w-full h-full justify-center ">
          <div className="w-[950px] h-[60px]  mt-[150px] flex  bg-white shadow-sm overflow-hidden rounded items-center">
            <button className="bg-[#595bf0] h-full px-4 flex text-white items-center ">
              <AiOutlineSearch style={{ fontSize: "36px" }} />
            </button>

            <input
              type="text"
              className="w-full h-full border-0 outline-none px-2 placeholder-black/60 text-lg"
              placeholder="Search movies..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {movies &&
          movies.map((movie, index) => {
            if (index <= 4)
              return (
                <SearchResults
                  key={movie.id}
                  poster={`${imgUrl}${imageSize["2"]}${movie.poster_path}`}
                  title={movie.original_title}
                  year={movie.release_date}
                  popularity={movie.popularity}
                />
              );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
