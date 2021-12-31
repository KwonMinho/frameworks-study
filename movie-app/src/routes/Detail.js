import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  useEffect(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        "Wait :)"
      ) : (
        <Movie
          key={movie.title}
          id={movie.id}
          title={movie.title}
          cover={movie.medium_cover_image}
          summary={movie.summary}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
