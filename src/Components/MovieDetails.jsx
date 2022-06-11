import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IMAGE_API as imgUrl, imageSize } from "../API/index";
import { getNodeText } from "@testing-library/react";
function MovieDetails() {
  const params = useParams();

  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );

  if (loading) return <p>Loading ...</p>;
  if (error) console.log(error);
  const movie = data;

  return (
    <div className="container mx-auto h-[700px] flex space-x-10 justify-around mt-8">
      <div className="w-full h-full rounded-sm overflow-hidden bg-neutral-300">
        {" "}
        <img
          src={`${imgUrl}${imageSize["2"]}${movie.poster_path}`}
          alt=""
          className="h-full w-full bg-cover bg-center bg-no-repeat
          "
        />
      </div>

      <div className="absolute  w-[1535px] ">
        <div className="flex justify-around p-[120px]">
          <div className="h-[500px] flex flex-col text-white">
            <div className="w-[300px] h-[400px] border mb-3 rounded-lg overflow-hidden ">
              <img
                src={`${imgUrl}${imageSize["2"]}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full bg-no-repeat bg-center"
              />
            </div>
            <div className=" w-[300px] px-1">
              <div className="flex  justify-between w-full items-center  ">
                <h2 className="font-bold text-2xl text-clip break-words">
                  {movie.title}
                </h2>
                <div>{movie.vote_average}</div>
              </div>
              <div className="flex justify-between w-full ">
                <h2 className="">{`${movie.release_date}`.slice(0, 4)}</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="p-5 w-[800px] text-2xl text-white ">
              {movie.overview}
            </div>
            <ul className="flex justify-between w-[320px] px-4">
              {movie.genres?.map((genre) => (
                <li
                  className="bg-inherit text-white border rounded-full px-4 border-[#595bf0]"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
