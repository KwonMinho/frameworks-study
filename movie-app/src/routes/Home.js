import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.title}
            id={movie.id}
            title={movie.title}
            cover={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
