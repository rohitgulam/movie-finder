import { useEffect, useState } from "react";
import SingleMovie from "../Components/SingleMovie";

console.log(process.env.REACT_APP_API_KEY);
const MostRated = () => {
  const [mostRated, setMostRated] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/";
  const size = "w185";

  useEffect(() => {
    getMostRated();
  }, []);

  const getMostRated = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const data = await api.json();

    console.log(data);

    const movies = data.results.splice(0, 4);
    setMostRated(movies);
    console.log(movies);
  };

  // console.log(process.env.REACT_APP_API_KEY)

  return (
    <div className="flex justify-center mt-20 flex-col items-center">
      <div className="flex w-[900px]">
        <div className="flex justify-between  w-full">
          <div className="font-medium text-3xl capitalize">most rated</div>
          <div className="font-medium text-lg text-[#595bf0]">
            <span className="capitalize">view</span> all
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-between mt-10  w-[900px]">
        {mostRated.map((object) => {
          return (
            <SingleMovie
              key={object.id}
              img={`${base_url}${size}${object.poster_path}`}
              movieName={object.title}
              rating={object.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MostRated;
