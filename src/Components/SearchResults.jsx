import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const SearchResults = ({ title, poster, year, popularity, id, hideSearch }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[950px] bg-white ">
        <div className=" px-5 py-3 border-b">
          <Link to={`movies/${id}`} className="flex justify-between " onClick={hideSearch}>
            <div className="flex">
              <div className="w-[50px] rounded-sm overflow-hidden">
                <img
                  src={poster}
                  alt={title}
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                />
              </div>
              <div className=" flex flex-col px-3">
                <p>{title}</p>
                <p>{year}</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col">
                <div>popularity</div>
                <div className="flex space-x-2">
                  <BiTrendingUp size="40px" color="#595bf0" />
                  <div>{Number(popularity).toFixed(1)}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
