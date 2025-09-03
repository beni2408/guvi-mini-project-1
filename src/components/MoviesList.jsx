import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/movieSlice";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p className="text-white">Loading movies...</p>;
  }

  if (status === "failed") {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="movieslist flex flex-wrap w-full bg-[#1a1b1c] p-10 gap-8">
      {list.map((movie) => (
        <div
          key={movie.id}
          className="w-[46vw] h-[50vh] md:w-[20vw] md:h-[38vh] lg:w-[20vw] lg:h-[52vh] border border-white flex flex-col justify-between items-center rounded-md bg-[#0f1214] shadow-black shadow-lg"
        >
          {/* Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[70%] rounded-t-md object-cover"
          />

          {/* Details */}
          <div className="w-full h-[30%] p-2 text-white flex flex-col justify-center">
            <h2 className="text-sm md:text-lg font-bold">{movie.title}</h2>
            <p className="text-xs md:text-sm">
              Year: {movie.release_date?.split("-")[0]}
            </p>
            <p className="text-xs md:text-sm">
              Rating: ⭐ {movie.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
