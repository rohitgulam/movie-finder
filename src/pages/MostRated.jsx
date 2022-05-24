import React from "react";

const MostRated = () => {
  return (
    <div className="flex justify-center mt-4 flex-col items-center">
      <div className="flex w-[900px]">
        <div className="flex justify-between  w-full">
          <div className="font-medium text-3xl capitalize">most rated</div>
          <div className="font-medium text-lg text-[#595bf0]"><span className="capitalize">view</span>  all</div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <div className="bg-gray-200 w-[120px] h-[170px] rounded"></div>
      </div>
    </div>
  );
};

export default MostRated;
