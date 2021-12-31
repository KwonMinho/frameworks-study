import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, cover, summary, genres }) {
  return (
    <div key={id}>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <img src={cover} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
