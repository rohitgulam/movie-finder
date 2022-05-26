import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

function SingleMovie({ img, movieName, cat, rating }) {
  return (
    <div>
        <div className="h-[420px] w-[300px] rounded flex flex-col justify-between">
            <img className='h-[360px] rounded-3xl' src={img} alt={movieName} />

        <div className="flex justify-between mt-2 items-center">
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
      </div>
    </div>
  );
}

export default SingleMovie;
