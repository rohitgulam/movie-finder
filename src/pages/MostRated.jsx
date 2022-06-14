import { useEffect, useState } from "react";
import SingleMovie from "../Components/SingleMovie";
import useFetch from "../hooks/useFetch";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const MostRated = () => {
  // const [mostRated, setMostRated] = useState([]);
  const {data, loading, error} = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);

  if(loading) return <p>Loading ...</p>
  if (error) console.log(error);
  const movies = data?.results;
  
  



  const base_url = "https://image.tmdb.org/t/p/";
  const size = "w185";

  // useEffect(() => {
  //   getMostRated();
  // }, []);

  // const getMostRated = async () => {
  //   const api = await fetch(
  //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  //   );
  //   const data = await api.json();
  //   const movies = data.results.splice(0, 4);
  //   setMostRated(movies);
  // };


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
          <Splide options={{
            type: 'loop',
            perPage: 4,
            focus: 'center',
            pagination: false,
            drag: 'free'
          }} className="flex gap-5 justify-between mt-6 w-[900px]">
          {movies?.map((movie) => {
            return (
              <SplideSlide key={movie.id}>
                <SingleMovie
                img={`${base_url}${size}${movie.poster_path}`}
                movieName={movie.title}
                rating={movie.vote_average}
                id={movie.id}
              />
              </SplideSlide>
            );
          })}
          </Splide>
    </div>
  )
};

export default MostRated;
