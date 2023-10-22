'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const API_KEY = 'e0354337fb6b734d57e2e584b0eb0d08';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function MainPage() {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`${BASE_URL}/movie/popular`)).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-2 gap-20 p-20">
        {!movies && <div>Loading...</div>}
        {movies?.map((movie) => (
          <li key={movie.id} className="text-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.original_title} poster image`}
              width={200}
              height={300}
              className="rounded-lg inline-block"
            />
            <h4>{movie.original_title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
