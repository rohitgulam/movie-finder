import React from "react";
import {Link} from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

function SingleMovie({ img, movieName, cat, rating, id }) {
  return (
    <Link to={`/movies/${id}`} className="h-[380px] w-[200px]  flex flex-col ">
      <div className="h-[300px] rounded-2xl overflow-hidden mb-3">
        <img className="h-[full] w-full" src={img} alt={movieName} />
      </div>

      <div className="flex justify-between items-center  ">
        <div className="name-cat">
          <h3 className="text-xl font-semibold">{movieName}</h3>
          <p>{cat}</p>
        </div>
        <div className="rating flex text-gray-500 items-center">
          <div>
            <AiTwotoneStar />
          </div>
          <div> {rating}</div>
        </div>
      </div>
    </Link>
  );
}

export default SingleMovie;
