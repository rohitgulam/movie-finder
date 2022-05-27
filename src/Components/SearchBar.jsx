import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

function SearchBar({ hideSearch }) {
  return (
    <div className="bg-[#595bf0]/50 position absolute bottom-0 top-0 left-0 right-0">
      <div className="absolute right-3 top-3" onClick={hideSearch}>
        <button>
          <AiOutlineCloseCircle
            style={{ fontSize: "30px", color: "white", textShadow: "#595bf0" }}
          />
        </button>
      </div>
      <div className=" flex w-full h-full justify-center ">
        <div className="w-[950px] h-[60px]  mt-[200px] flex  bg-white shadow-sm overflow-hidden rounded items-center">
          <button className="bg-[#595bf0] h-full px-4 flex text-white items-center ">
            <AiOutlineSearch style={{ fontSize: "36px" }} />
          </button>

          <input
            type="text"
            className="w-full h-full border-0 outline-none px-2 placeholder-black/60 text-lg"
            placeholder="Search movies..."
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
