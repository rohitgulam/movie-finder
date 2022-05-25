import React from "react";
import SingleMovie from "../Components/SingleMovie";

const MostRated = () => {

  console.log(process.env.REACT_APP_API_KEY)

  return (
    <div className="flex justify-center mt-20 flex-col items-center">
      <div className="flex w-[900px]">
        <div className="flex justify-between  w-full">
          <div className="font-medium text-3xl capitalize">most rated</div>
          <div className="font-medium text-lg text-[#595bf0]"><span className="capitalize">view</span>  all</div>
        </div>
      </div>

      <div className="flex gap-5 justify-between mt-10">
        <SingleMovie img='https://media-cache.cinematerial.com/p/500x/zyoabvnh/doctor-strange-in-the-multiverse-of-madness-movie-poster.jpg?v=1650996676' movieName='Doctor Strange' cat='Comdey, Action' rating='8.0' />
        <SingleMovie img='https://media-cache.cinematerial.com/p/500x/4vmodacg/the-bad-guys-movie-poster.jpg?v=1639499851' movieName='The Bad Guys' cat='Comdey, Animation' rating='8.1' />
      </div>
    </div>
  );
};

export default MostRated;
