import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function MovieDetails() {
  const params = useParams();

  const {data, loading, error} = useFetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);

  if(loading) return <p>Loading ...</p>
  if (error) console.log(error);
  const movie = data
  console.log(movie);

  

  console.log(params);
  return (
    <div className='container mx-auto border p-14' >
       <div className="w-full h-[500px] flex">
          <div className='w-[300px] h-[400px] border mr-[100px]'>
            <img src="" alt="" />
            t
          </div>
          <div className="border-2 ">
            {movie.title}
          </div>
       </div>
    </div>
  )
}

export default MovieDetails